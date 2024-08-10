// RoughHighlight.js
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";

function RoughHighlight({ children, color = "#E5A4B2", threshold = 0.6 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <div ref={ref}>
      <RoughNotation type="highlight" show={inView} color={color} animationDuration={2000}>
        {children}
      </RoughNotation>
    </div>
  );
}

export default RoughHighlight;
