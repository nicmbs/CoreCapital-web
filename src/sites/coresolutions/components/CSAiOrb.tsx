import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { csBrand } from "../brand";

/**
 * Preferred: real 3D looping video (Dreamstime / stock style).
 * Drop licensed files here:
 *   public/cs/orb-live.webm  (best)
 *   public/cs/orb-live.mp4   (fallback)
 * Until then we use the transparent WebP morph loop.
 * Assets live under /cs (not /coresolutions) so the SPA route is not shadowed.
 */
const VIDEO_WEBM = "/cs/orb-live.webm?v=4";
const VIDEO_MP4 = "/cs/orb-live.mp4?v=4";
const WEBP_LOOP = "/cs/orb-live.webp?v=3";
const STILL = "/cs/orb-a-clear.png?v=3";

/**
 * Presentation mode:
 * - "float"  → figure floats free in the middle while morphing (current default)
 * - "sphere" → previous look: video clipped inside a circular sphere + rim auras
 *
 * Flip back to "sphere" anytime to restore the prior version.
 */
const ORB_PRESENTATION: "float" | "sphere" = "float";

/** Zoom into the centered figure — crops letterbox black from 16:9 stock clips. */
const VIDEO_CROP_SCALE_SPHERE = 1.45;
/** Crop transparent margins + generator watermark (sparkle, bottom-right). */
const VIDEO_CROP_SCALE_FLOAT = 1.42;

/** Spherical mask (sphere mode only). */
const ORB_CLIP = "circle(48% at 50% 50%)";

const SPRING = { stiffness: 90, damping: 18, mass: 0.45 };

type AuraBlobConfig = {
  invert: boolean;
  w: string;
  h: string;
  top: string;
  left: string;
  blur: number;
  dur: number;
  delay: number;
  /** How strongly this blob follows the pointer (1 = base). */
  pull: number;
  motion: {
    scaleX: number[];
    scaleY: number[];
    x: number[];
    y: number[];
    rotate: number[];
    opacity: number[];
  };
};

const AURA_BLOBS: AuraBlobConfig[] = [
  {
    invert: false,
    w: "50%",
    h: "34%",
    top: "14%",
    left: "26%",
    blur: 16,
    dur: 17,
    delay: 0,
    pull: 1.15,
    motion: {
      scaleX: [1, 1.14, 0.92, 1.08, 1.02, 1],
      scaleY: [1, 0.9, 1.12, 0.96, 1.06, 1],
      x: [0, 14, -6, 18, -10, 0],
      y: [0, -4, 8, -2, 6, 0],
      rotate: [0, 14, -8, 18, -6, 0],
      opacity: [0.85, 1, 0.7, 0.95, 0.8, 0.85],
    },
  },
  {
    // top-right
    invert: true,
    w: "46%",
    h: "54%",
    top: "12%",
    left: "48%",
    blur: 16,
    dur: 14,
    delay: 1.4,
    pull: 0.85,
    motion: {
      scaleX: [1, 0.88, 1.18, 0.95, 1.1, 1],
      scaleY: [1, 1.16, 0.9, 1.12, 0.94, 1],
      x: [0, 8, -14, 4, -12, 0],
      y: [0, 12, -8, 16, -4, 0],
      rotate: [0, -16, 10, -20, 8, 0],
      opacity: [0.8, 1, 0.65, 1, 0.75, 0.8],
    },
  },
  {
    // bottom-left — larger / closer so it bridges top-left ↔ bottom-right
    invert: false,
    w: "54%",
    h: "46%",
    top: "36%",
    left: "10%",
    blur: 18,
    dur: 19,
    delay: 0.7,
    pull: 1.15,
    motion: {
      scaleX: [1, 1.16, 0.9, 1.12, 0.98, 1],
      scaleY: [1, 0.9, 1.14, 0.92, 1.08, 1],
      x: [0, 10, 4, 14, -2, 0],
      y: [0, -8, 6, -10, 4, 0],
      rotate: [0, 14, -8, 18, -6, 0],
      opacity: [0.9, 1, 0.78, 1, 0.85, 0.9],
    },
  },
  {
    invert: true,
    w: "38%",
    h: "44%",
    top: "42%",
    left: "46%",
    blur: 14,
    dur: 15,
    delay: 2.1,
    pull: 0.7,
    motion: {
      scaleX: [1, 0.92, 1.16, 0.88, 1.08, 1],
      scaleY: [1, 1.14, 0.88, 1.18, 0.96, 1],
      x: [0, -10, 6, -12, 8, 0],
      y: [0, -8, 12, -4, 10, 0],
      rotate: [0, -18, 14, -10, 16, 0],
      opacity: [0.8, 1, 0.68, 0.95, 0.82, 0.8],
    },
  },
  {
    invert: false,
    w: "42%",
    h: "32%",
    top: "18%",
    left: "14%",
    blur: 15,
    dur: 16,
    delay: 0.3,
    pull: 1.05,
    motion: {
      scaleX: [1, 1.18, 0.9, 1.05, 1.12, 1],
      scaleY: [1, 0.88, 1.15, 0.94, 1.08, 1],
      x: [0, -6, 10, -10, 4, 0],
      y: [0, 8, -8, 4, -6, 0],
      rotate: [0, -12, 16, -6, 12, 0],
      opacity: [0.85, 0.75, 1, 0.8, 0.95, 0.85],
    },
  },
  {
    // southwest bridge — fills the gap between left/bottom auras
    invert: true,
    w: "40%",
    h: "36%",
    top: "48%",
    left: "18%",
    blur: 16,
    dur: 18,
    delay: 1.1,
    pull: 1.0,
    motion: {
      scaleX: [1, 1.12, 0.92, 1.1, 0.96, 1],
      scaleY: [1, 0.9, 1.14, 0.94, 1.08, 1],
      x: [0, 8, -4, 12, -6, 0],
      y: [0, -6, 8, -4, 6, 0],
      rotate: [0, 10, -12, 8, -6, 0],
      opacity: [0.88, 1, 0.75, 0.95, 0.82, 0.88],
    },
  },
];

function AuraBlob({
  blob,
  pullX,
  pullY,
  hover,
}: {
  blob: AuraBlobConfig;
  pullX: MotionValue<number>;
  pullY: MotionValue<number>;
  hover: MotionValue<number>;
}) {
  const x = useTransform(pullX, (v) => v * blob.pull);
  const y = useTransform(pullY, (v) => v * blob.pull);
  const saturate = useTransform(hover, [0, 1], [1.35, 1.55]);
  const filter = useTransform(saturate, (s) => `blur(${blob.blur}px) saturate(${s})`);

  const blue = csBrand.blueBright;
  const magenta = "#E11D8F";
  const cA = blob.invert ? magenta : blue;
  const cB = blob.invert ? blue : magenta;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: blob.w,
        height: blob.h,
        top: blob.top,
        left: blob.left,
        x,
        y,
        filter,
      }}
    >
      <motion.div
        className="h-full w-full"
        animate={{
          borderRadius: [
            "60% 40% 55% 45% / 45% 55% 45% 55%",
            "40% 60% 40% 60% / 60% 35% 65% 40%",
            "55% 45% 65% 35% / 40% 60% 40% 60%",
            "35% 65% 50% 50% / 55% 45% 55% 45%",
            "48% 52% 42% 58% / 58% 42% 55% 45%",
            "60% 40% 55% 45% / 45% 55% 45% 55%",
          ],
          ...blob.motion,
          background: [
            `radial-gradient(ellipse at 40% 45%, ${cA}ff 0%, ${cA}dd 22%, ${cA}88 42%, transparent 72%)`,
            `radial-gradient(ellipse at 40% 45%, ${cB}ff 0%, ${cB}dd 22%, ${cB}88 42%, transparent 72%)`,
            `radial-gradient(ellipse at 40% 45%, ${cA}ff 0%, ${cA}dd 22%, ${cA}88 42%, transparent 72%)`,
            `radial-gradient(ellipse at 40% 45%, ${cB}ff 0%, ${cB}dd 22%, ${cB}88 42%, transparent 72%)`,
            `radial-gradient(ellipse at 40% 45%, ${cA}ff 0%, ${cA}dd 22%, ${cA}88 42%, transparent 72%)`,
          ],
        }}
        transition={{
          duration: blob.dur,
          delay: blob.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

async function probeVideo(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "HEAD", cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

export function CSAiOrb() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const isSphere = ORB_PRESENTATION === "sphere";
  const cropScale = isSphere ? VIDEO_CROP_SCALE_SPHERE : VIDEO_CROP_SCALE_FLOAT;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const hoverRaw = useMotionValue(0);
  const pullX = useSpring(pointerX, SPRING);
  const pullY = useSpring(pointerY, SPRING);
  const hover = useSpring(hoverRaw, { stiffness: 120, damping: 22 });

  const glowScale = useTransform(hover, [0, 1], [1, 1.1]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ok = (await probeVideo(VIDEO_WEBM)) || (await probeVideo(VIDEO_MP4));
      if (!cancelled) setHasVideo(ok);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!hasVideo || reduceMotion) return;
    const el = videoRef.current;
    if (!el) return;
    el.playbackRate = 0.85;
    void el.play().catch(() => {
      /* autoplay may be blocked; muted + playsInline usually OK */
    });
  }, [hasVideo, reduceMotion]);

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    pointerX.set(nx * 52);
    pointerY.set(ny * 52);
    hoverRaw.set(1);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    hoverRaw.set(0);
  };

  const media = reduceMotion ? (
    <img
      src={STILL}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
      draggable={false}
    />
  ) : hasVideo ? (
    <video
      ref={videoRef}
      className="absolute left-1/2 top-1/2 select-none pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        objectFit: isSphere ? "cover" : "contain",
        objectPosition: "center center",
        transform: `translate(-50%, -50%) scale(${cropScale})`,
        transformOrigin: "center center",
        // Transparent WebM uses real alpha; screen blend was for black-bg clips.
        mixBlendMode: isSphere ? "screen" : "normal",
      }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src={VIDEO_WEBM} type="video/webm" />
      <source src={VIDEO_MP4} type="video/mp4" />
    </video>
  ) : (
    <img
      src={WEBP_LOOP}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
      style={{ mixBlendMode: "screen" }}
      draggable={false}
    />
  );

  return (
    <div
      className="relative w-full max-w-[480px] lg:max-w-[520px] mx-auto overflow-visible bg-transparent touch-none"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] pointer-events-none"
        style={{
          x: reduceMotion ? 0 : pullX,
          y: reduceMotion ? 0 : pullY,
          scale: reduceMotion ? 1 : glowScale,
        }}
      >
        <motion.div
          className="h-full w-full rounded-full blur-[100px]"
          style={{
            background: `radial-gradient(circle, ${csBrand.blueBright}70 0%, #E11D8F44 48%, transparent 72%)`,
          }}
          animate={
            reduceMotion
              ? { opacity: 0.55 }
              : { opacity: [0.45, 0.75, 0.5, 0.7, 0.45], scale: [0.96, 1.06, 1, 1.05, 0.96] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="relative w-full bg-transparent overflow-visible"
        style={{ aspectRatio: "1 / 1" }}
        animate={reduceMotion ? undefined : { y: [0, -8, 0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Soft color wash around the floating figure / sphere */}
        {!reduceMotion && (
          <div
            aria-hidden
            className="absolute pointer-events-none overflow-visible"
            style={{ inset: isSphere ? "-28%" : "-18%" }}
          >
            <div
              className="absolute inset-0"
              style={
                isSphere
                  ? {
                      // Slight gap between sphere rim (~19%) and aura inner edge
                      maskImage:
                        "radial-gradient(circle at 50% 50%, transparent 21.5%, rgba(0,0,0,0.2) 23.5%, black 27%, black 58%, rgba(0,0,0,0.4) 74%, transparent 92%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at 50% 50%, transparent 21.5%, rgba(0,0,0,0.2) 23.5%, black 27%, black 58%, rgba(0,0,0,0.4) 74%, transparent 92%)",
                    }
                  : {
                      // Soft halo around the free figure — no hard sphere hole
                      maskImage:
                        "radial-gradient(circle at 50% 50%, transparent 8%, rgba(0,0,0,0.35) 22%, black 38%, rgba(0,0,0,0.5) 68%, transparent 90%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at 50% 50%, transparent 8%, rgba(0,0,0,0.35) 22%, black 38%, rgba(0,0,0,0.5) 68%, transparent 90%)",
                    }
              }
            >
              {AURA_BLOBS.map((blob, i) => (
                <AuraBlob key={i} blob={blob} pullX={pullX} pullY={pullY} hover={hover} />
              ))}
            </div>
          </div>
        )}

        {isSphere ? (
          /* Previous: smaller sphere with hard circular clip */
          <div
            className="absolute inset-[20%] overflow-hidden rounded-full bg-black/50 pointer-events-none"
            style={{
              clipPath: ORB_CLIP,
              WebkitClipPath: ORB_CLIP,
              boxShadow: `inset 0 -18px 40px rgba(0,0,0,0.45), inset 0 12px 28px rgba(255,255,255,0.12)`,
            }}
          >
            {media}
          </div>
        ) : (
          /* Float: free figure in the middle — no circular portal */
          <motion.div
            className="absolute inset-[0%] bg-transparent overflow-hidden pointer-events-none"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.03, 0.98, 1.02, 1],
                    rotate: [0, 1.2, -0.8, 0.6, 0],
                  }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            {media}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
