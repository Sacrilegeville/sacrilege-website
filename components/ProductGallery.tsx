"use client";

import { useState } from "react";

type Props = {
  gallery: string[];
  name: string;
};

export default function ProductGallery({ gallery, name }: Props) {
  const images = gallery.length ? gallery : ["/placeholder.png"];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">

      {/* Thumbnails */}
      <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:sticky md:top-28">

        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(img)}
            className="shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src={img}
              alt={`${name} ${index + 1}`}
              className={`w-24 h-24 md:w-20 md:h-20 rounded-lg object-cover border transition-all duration-300 ${
                selectedImage === img
                  ? "border-white"
                  : "border-white/20 hover:border-white/60"
              }`}
            />
          </button>
        ))}

      </div>

      {/* Main Image */}
      <div className="order-1 md:order-2 flex-1 overflow-hidden rounded-xl bg-zinc-950">

        <img
          src={selectedImage}
          alt={name}
          className="w-full object-cover transition-all duration-500"
        />

      </div>

    </div>
  );
}