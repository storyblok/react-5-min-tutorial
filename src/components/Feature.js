import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <div
    className="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center column feature"
    {...storyblokEditable(blok)}
  >
    <h3 className="text-2xl text-[#1d243d] font-bold">{blok.name}</h3>
  </div>
);

export default Feature;

