"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

type Props = {
  product: any;
  products: any[];
};

export default function ProductInfo({ product }: Props) {
  const sortedVariants = [...(product.variants || [])].sort(
    (a: any, b: any) => {
      const order = ["XS", "S", "M", "L", "XL", "XXL"];
      return order.indexOf(a.title) - order.indexOf(b.title);
    }
  );

  const [selectedVariant, setSelectedVariant] = useState(
    sortedVariants[0]
  );

  const [added, setAdded] = useState(false);

  function handleAddToBag() {
    if (!selectedVariant) return;

    addToCart({
      slug: product.handle,
      variantId: selectedVariant.id,
      name: product.name,
      price: product.price,
      image: product.gallery?.[0],
      size: selectedVariant.title,
      quantity: 1,
    });

    window.dispatchEvent(new Event("open-cart"));

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  return (
    <div className="text-white px-6 py-10 md:px-10 md:py-12 max-w-xl">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-semibold uppercase tracking-[0.08em] leading-[0.95]">
        {product.name}
      </h1>

      {/* PRICE */}
      <p className="text-2xl mt-6 font-light">
        ${product.price}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-8 text-zinc-400 text-[15px] leading-8 max-w-lg">
        {product.description}
      </p>

      {/* SIZE */}
      <div className="mt-10">

        <p className="uppercase text-xs tracking-[0.35em] text-zinc-500 mb-5">
          Size
        </p>

        <div className="grid grid-cols-4 gap-4">

          {sortedVariants.map((variant: any) => (

            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`h-14 rounded-full border transition-all duration-300 flex items-center justify-center uppercase text-sm tracking-[0.15em] ${
                selectedVariant?.id === variant.id
                  ? "bg-white text-black border-white"
                  : "bg-white/5 border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
              }`}
            >
              {variant.title}
            </button>

          ))}

        </div>

      </div>

      {/* ADDED MESSAGE */}

      {added && (
        <div className="mt-8 mb-6 rounded-full border border-white bg-white text-black py-3 text-center uppercase tracking-[0.3em] text-sm">
          ✓ Added To Bag
        </div>
      )}

      {/* ADD TO BAG */}

      <button
        onClick={handleAddToBag}
        className="mt-10 w-full h-14 rounded-full border border-white bg-white text-black uppercase tracking-[0.35em] text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-white active:scale-[0.98]"
      >
        ADD TO BAG
      </button>

    </div>
  );
}