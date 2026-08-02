"""Build a looping morphing orb animation with transparent background (no square)."""
from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "coresolutions"

KEYS = [
    PUBLIC / "orb-a.png",
    PUBLIC / "orb-mid.png",
    PUBLIC / "orb-b.png",
    PUBLIC / "orb-mid2.png",
]

SIZE = 512
STEPS_PER_SEG = 8
BLACK_CUTOFF = 32


def knock_out_black(im: Image.Image) -> Image.Image:
    arr = np.asarray(im.convert("RGBA")).copy()
    rgb = arr[:, :, :3]
    hard = (rgb[:, :, 0] <= BLACK_CUTOFF) & (rgb[:, :, 1] <= BLACK_CUTOFF) & (
        rgb[:, :, 2] <= BLACK_CUTOFF
    )
    arr[hard, 3] = 0
    return Image.fromarray(arr, "RGBA")


def prep(path: Path) -> Image.Image:
    print(f"  prep {path.name}", flush=True)
    im = knock_out_black(Image.open(path))
    im.thumbnail((SIZE, SIZE), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(im, ((SIZE - im.width) // 2, (SIZE - im.height) // 2), im)
    # Persist clean static keyframes too
    out = PUBLIC / f"{path.stem}-clear.png"
    canvas.save(out, "PNG")
    return canvas


def main() -> None:
    print("loading keys…", flush=True)
    bases = [prep(p) for p in KEYS]
    loop_keys = bases + [bases[0]]
    total_frames = STEPS_PER_SEG * (len(loop_keys) - 1)
    frames: list[Image.Image] = []
    frame_i = 0

    print(f"building {total_frames} frames…", flush=True)
    for seg in range(len(loop_keys) - 1):
        a = loop_keys[seg]
        b = loop_keys[seg + 1]
        for s in range(STEPS_PER_SEG):
            t = s / STEPS_PER_SEG
            tt = t * t * (3 - 2 * t)
            blended = Image.blend(a, b, tt)
            angle = -(frame_i / total_frames) * 360.0
            breathe = 1.0 + 0.04 * math.sin(2 * math.pi * frame_i / total_frames)
            w = max(2, int(SIZE * breathe))
            scaled = blended.resize((w, w), Image.Resampling.BILINEAR)
            canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
            canvas.paste(scaled, ((SIZE - w) // 2, (SIZE - w) // 2), scaled)
            rotated = canvas.rotate(
                angle,
                resample=Image.Resampling.BILINEAR,
                expand=False,
                fillcolor=(0, 0, 0, 0),
            )
            # Re-knock residual dark plate after rotate/blend
            frames.append(knock_out_black(rotated))
            frame_i += 1
            if frame_i % 8 == 0:
                print(f"  frame {frame_i}/{total_frames}", flush=True)

    out_webp = PUBLIC / "orb-live.webp"
    print("saving webp…", flush=True)
    frames[0].save(
        out_webp,
        save_all=True,
        append_images=frames[1:],
        duration=55,
        loop=0,
        quality=80,
        method=4,
    )
    print(f"done frames={len(frames)} webp_bytes={out_webp.stat().st_size}", flush=True)


if __name__ == "__main__":
    main()
