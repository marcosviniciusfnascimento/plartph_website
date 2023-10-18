import { FemininosImages } from "@/app/assets/Femininos";
import { gestantesImages } from "@/app/assets/Gestantes";
import { HomeImages } from "@/app/assets/Home";
import { newBornImages } from "@/app/assets/NewBorn";
import { PartoImages } from "@/app/assets/Parto";
import Image from "next/image";
import Reveal from "../Reveal/Reveal";

const GalleryImages = {
  ...FemininosImages,
  ...gestantesImages,
  ...PartoImages,
  ...newBornImages,
  ...HomeImages,
};

export default function MansoryGallery() {
  const sortedImageArray = Object.values(GalleryImages).sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 md:p-24 p-10 bg-[#BB987D]">
      {sortedImageArray.map((image, index) => (
        <Reveal width="100%" key={image.src.toString()} delay={0.05 * index}>
          <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
            <Image
              src={image}
              alt="galleryImage"
              className="w-full rounded-md h-auto"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
