"use client";

import Link from "next/link";

type Props = {
  current: string;
};

const colors = [
  {
    name: "Black",
    slug: "irreverence-thermal",
    color: "#111111",
  },
  {
    name: "Gray",
    slug: "gray-thermal",
    color: "#777777",
  },
  {
    name: "White",
    slug: "white-thermal",
    color: "#ffffff",
  },
  {
    name: "Sand",
    slug: "sand-thermal",
    color: "#c8b08a",
  },
];

export default function ColorSelector({ current }: Props) {
  return (
    <div className="mt-8">
      <p className="uppercase text-sm tracking-widest mb-3">
        Color
      </p>

      <div className="flex gap-4">
        {colors.map((color) => (
          <Link
            key={color.slug}
            href={`/products/${color.slug}`}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 transition cursor-pointer ${
                current === color.slug
                  ? "border-white scale-110"
                  : "border-gray-600 hover:border-white"
              }`}
              style={{ backgroundColor: color.color }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}