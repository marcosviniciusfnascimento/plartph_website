/* eslint-disable @next/next/no-img-element */
"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Reveal from "../Reveal/Reveal";

interface BeforeAndAfterSliderProps {
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
}

export default function BeforeAndAfterSlider(props: BeforeAndAfterSliderProps) {
  const { beforeImage, afterImage } = props;
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Reveal width="100%">
      <div className="w-full relative" onMouseUp={handleMouseUp}>
        <div
          className="relative w-full rounded-md max-w-[700px] aspect-[70/90] m-auto overflow-hidden select-none"
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
        >
          <img alt="beforeImage" src={beforeImage.src} />

          <div
            className="absolute top-0 left-0 right-0 rounded-md w-full max-w-[700px] aspect-[70/90] m-auto overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img alt="afterImage" src={afterImage.src} />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{
              left: `calc(${sliderPosition}% - 1px)`,
            }}
          >
            <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
