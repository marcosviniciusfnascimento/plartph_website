"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export default function Reveal({
  children,
  width = "fit-content",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Dispara animação com base no scroll atingir o componente
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        border: "none",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 150 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
