"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const greetings = ["Hi", "Hey", "That's me"];

export function Portrait({ src, name }: { src: string; name: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [awake, setAwake] = useState(false);
  const [spins, setSpins] = useState(0);
  const [greeting, setGreeting] = useState<string | null>(null);
  const [pop, setPop] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setStill(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!greeting) return;
    const timer = window.setTimeout(() => setGreeting(null), 1600);
    return () => window.clearTimeout(timer);
  }, [greeting]);

  function lean(event: PointerEvent<HTMLButtonElement>) {
    if (still || event.pointerType === "touch") return;
    const box = buttonRef.current?.getBoundingClientRect();
    if (!box) return;
    const px = (event.clientX - box.left) / box.width - 0.5;
    const py = (event.clientY - box.top) / box.height - 0.5;
    setTilt({ x: py * -12, y: px * 14 });
    setAwake(true);
  }

  function rest() {
    setTilt({ x: 0, y: 0 });
    setAwake(false);
  }

  function sayHi() {
    setSpins((count) => count + 1);
    setGreeting(greetings[spins % greetings.length]);
    setPop((count) => count + 1);
  }

  return (
    <div className="relative shrink-0">
      <style>{`
        @keyframes portrait-orbit {
          to { transform: rotate(360deg); }
        }
        .portrait-orbit {
          animation: portrait-orbit 2.4s linear infinite;
        }
        @keyframes portrait-pop {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .portrait-pop {
          animation: portrait-pop 280ms ease;
        }
      `}</style>
      <button
        ref={buttonRef}
        type="button"
        aria-label={`Portrait of ${name}. Click to say hi.`}
        onPointerMove={lean}
        onPointerEnter={() => setAwake(true)}
        onPointerLeave={rest}
        onFocus={() => setAwake(true)}
        onBlur={rest}
        onClick={sayHi}
        className="group relative block aspect-square w-[clamp(10.5rem,42vw,24rem)] cursor-pointer rounded-full focus-visible:outline-none"
        style={{
          transform: still
            ? undefined
            : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: awake ? "transform 90ms linear" : "transform 480ms ease",
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-3 rounded-full border border-foreground/15"
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute -inset-3 ${
            awake && !still ? "portrait-orbit" : ""
          }`}
        >
          <span
            className="absolute inset-0 rounded-full transition-opacity duration-300"
            style={{
              opacity: awake ? 1 : 0,
              background:
                "conic-gradient(from 0deg, transparent 0 68%, #d23639 86%, transparent 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
            }}
          />
          <span className="absolute top-0 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mark" />
        </span>
        <span
          className="relative block size-full overflow-hidden rounded-full bg-[#141414] shadow-[0_0_0_0_rgba(252,238,10,0)] transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-18px_rgba(252,238,10,0.35)] group-focus-visible:shadow-[0_18px_40px_-18px_rgba(252,238,10,0.35)]"
          style={{
            transform: still ? undefined : `rotate(${spins * 360}deg)`,
            transition: "transform 900ms cubic-bezier(.16,.84,.24,1)",
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority
            sizes="384px"
            className="object-cover"
            style={{
              transform: still
                ? undefined
                : `translate3d(${tilt.y * -1.2}px, ${tilt.x * 1.1}px, 0) scale(${awake ? 1.12 : 1})`,
              transition: awake ? "transform 120ms linear" : "transform 480ms ease",
            }}
          />
        </span>
        <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent group-focus-visible:ring-mark" />
      </button>
      {greeting ? (
        <p
          key={pop}
          className="portrait-pop pointer-events-none absolute top-full left-1/2 mt-3 text-[12px] font-medium tracking-[0.2em] whitespace-nowrap uppercase"
        >
          {greeting}
          <span className="text-mark">.</span>
        </p>
      ) : null}
    </div>
  );
}
