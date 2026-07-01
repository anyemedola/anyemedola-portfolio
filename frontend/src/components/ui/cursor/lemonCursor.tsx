"use client";

import { useEffect, useRef } from "react";
import { CursorWrapper } from "./styles";

export default function LemonCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${currentX}px, ${currentY}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <CursorWrapper ref={cursorRef} />;
}