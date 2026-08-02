import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { csBrand } from "../brand";

/**
 * Preferred: real 3D looping video (Dreamstime / stock style).
 * Drop licensed files here:
 *   public/coresolutions/orb-live.webm  (best)
 *   public/coresolutions/orb-live.mp4   (fallback)
 * Until then we use the transparent WebP morph loop.
 */
const VIDEO_WEBM = "/coresolutions/orb-live.webm";
const VIDEO_MP4 = "/coresolutions/orb-live.mp4";
const WEBP_LOOP = "/coresolutions/orb-live.webp?v=3";
const STILL = "/coresolutions/orb-a-clear.png?v=3";

/** Zoom into the centered figure — crops letterbox black from 16:9 stock clips. */
const VIDEO_CROP_SCALE = 1.45;

/** Spherical mask. */
const ORB_CLIP = "circle(48% at 50% 50%)";

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
        objectFit: "cover",
        objectPosition: "center center",
        transform: `translate(-50%, -50%) scale(${VIDEO_CROP_SCALE})`,
        transformOrigin: "center center",
        mixBlendMode: "screen",
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
      draggable={false}
    />
  );

  return (
    <div className="relative w-full max-w-[440px] lg:max-w-[480px] mx-auto overflow-visible bg-transparent">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${csBrand.blueBright}70 0%, #E11D8F44 48%, transparent 72%)`,
        }}
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.45, 0.75, 0.5, 0.7, 0.45], scale: [0.96, 1.06, 1, 1.05, 0.96] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-full bg-transparent overflow-visible"
        style={{ aspectRatio: "1 / 1" }}
        animate={reduceMotion ? undefined : { y: [0, -8, 0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Aura tight to the sphere rim */}
        {!reduceMotion && (
          <div
            aria-hidden
            className="absolute pointer-events-none overflow-visible"
            style={{ inset: "-28%" }}
          >
            <div
              className="absolute inset-0"
              style={{
                // Slight gap between sphere rim (~19%) and aura inner edge
                maskImage:
                  "radial-gradient(circle at 50% 50%, transparent 21.5%, rgba(0,0,0,0.2) 23.5%, black 27%, black 58%, rgba(0,0,0,0.4) 74%, transparent 92%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 50%, transparent 21.5%, rgba(0,0,0,0.2) 23.5%, black 27%, black 58%, rgba(0,0,0,0.4) 74%, transparent 92%)",
              }}
            >
              {[
                {
                  invert: false,
                  w: "50%",
                  h: "34%",
                  top: "14%",
                  left: "26%",
                  blur: 16,
                  dur: 17,
                  delay: 0,
                  // top — drifts sideways with light stretch
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
                  invert: true,
                  w: "38%",
                  h: "48%",
                  top: "24%",
                  left: "46%",
                  blur: 15,
                  dur: 14,
                  delay: 1.4,
                  // right — shears and arcs
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
                  invert: false,
                  w: "44%",
                  h: "38%",
                  top: "40%",
                  left: "14%",
                  blur: 17,
                  dur: 19,
                  delay: 0.7,
                  // bottom-left — crawl along the rim (not just pulse)
                  motion: {
                    scaleX: [1, 1.22, 0.85, 1.15, 0.95, 1],
                    scaleY: [1, 0.86, 1.2, 0.9, 1.1, 1],
                    x: [0, 16, 6, 22, -4, 0],
                    y: [0, -14, 4, -18, 8, 0],
                    rotate: [0, 22, -12, 28, -8, 0],
                    opacity: [0.85, 0.95, 0.7, 1, 0.78, 0.85],
                  },
                },
                {
                  invert: true,
                  w: "36%",
                  h: "44%",
                  top: "42%",
                  left: "48%",
                  blur: 14,
                  dur: 15,
                  delay: 2.1,
                  // bottom-right — wobble orbit
                  motion: {
                    scaleX: [1, 0.92, 1.16, 0.88, 1.08, 1],
                    scaleY: [1, 1.14, 0.88, 1.18, 0.96, 1],
                    x: [0, -12, 8, -16, 10, 0],
                    y: [0, -10, 14, -6, 12, 0],
                    rotate: [0, -18, 14, -10, 16, 0],
                    opacity: [0.8, 1, 0.68, 0.95, 0.82, 0.8],
                  },
                },
                {
                  invert: false,
                  w: "42%",
                  h: "30%",
                  top: "16%",
                  left: "16%",
                  blur: 15,
                  dur: 16,
                  delay: 0.3,
                  // top-left — slide + twist
                  motion: {
                    scaleX: [1, 1.18, 0.9, 1.05, 1.12, 1],
                    scaleY: [1, 0.88, 1.15, 0.94, 1.08, 1],
                    x: [0, -8, 12, -14, 6, 0],
                    y: [0, 10, -12, 6, -8, 0],
                    rotate: [0, -12, 16, -6, 12, 0],
                    opacity: [0.85, 0.75, 1, 0.8, 0.95, 0.85],
                  },
                },
              ].map((blob, i) => {
                const blue = csBrand.blueBright;
                const magenta = "#E11D8F";
                const cA = blob.invert ? magenta : blue;
                const cB = blob.invert ? blue : magenta;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: blob.w,
                      height: blob.h,
                      top: blob.top,
                      left: blob.left,
                      filter: `blur(${blob.blur}px) saturate(1.35)`,
                    }}
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
                );
              })}
            </div>
          </div>
        )}

        {/* Smaller sphere */}
        <div
          className="absolute inset-[20%] overflow-hidden rounded-full bg-black/50"
          style={{
            clipPath: ORB_CLIP,
            WebkitClipPath: ORB_CLIP,
            boxShadow: `inset 0 -18px 40px rgba(0,0,0,0.45), inset 0 12px 28px rgba(255,255,255,0.12)`,
          }}
        >
          {media}
        </div>
      </motion.div>
    </div>
  );
}
