import BeforeAndAfterSlider from "./BeforeAndAfterSlider";

import before1 from "../../assets/Presets/before1.jpg";
import after1 from "../../assets/Presets/after1.jpg";

import before2 from "../../assets/Presets/before2.jpg";
import after2 from "../../assets/Presets/after2.jpg";

import before3 from "../../assets/Presets/before3.jpg";
import after3 from "../../assets/Presets/after3.jpg";

import before4 from "../../assets/Presets/before4.jpg";
import after4 from "../../assets/Presets/after4.jpg";

export default function PresetsSlider() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 w-full h-full gap-8">
      <BeforeAndAfterSlider beforeImage={before1} afterImage={after1} />
      <BeforeAndAfterSlider beforeImage={before2} afterImage={after2} />
      <BeforeAndAfterSlider beforeImage={before3} afterImage={after3} />
      <BeforeAndAfterSlider beforeImage={before4} afterImage={after4} />
    </div>
  );
}
