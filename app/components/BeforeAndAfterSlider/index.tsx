import BeforeAndAfterSlider from "./BeforeAndAfterSlider";

const before1 = require("../../assets/Presets/before1.JPG");
const after1 = require("../../assets/Presets/after1.JPG");

const before2 = require("../../assets/Presets/before2.JPG");
const after2 = require("../../assets/Presets/after2.JPG");

const before3 = require("../../assets/Presets/before3.JPG");
const after3 = require("../../assets/Presets/after3.JPG");

const before4 = require("../../assets/Presets/before4.JPG");
const after4 = require("../../assets/Presets/after4.JPG");

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
