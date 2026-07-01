import Link from "next/link";
import { getProducts } from "@/lib/shopify";

export default async function Drop001() {
  const products = await getProducts();

 return (
  <section
    id="drop001"
   className="bg-black text-white py-40 md:py-48"
  >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
  <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">
  SACRILEGE
</p>

<h2 className="mt-5 text-5xl md:text-7xl font-light tracking-[0.15em] uppercase">
  NEW ARRIVALS
</h2>

<p className="mt-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
  Limited Release
</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">

          {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              className="group"
            >
  <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-[3/4] border border-white/5">

  <img
    src={product.featuredImage?.url}
    alt={product.title}
    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
  />

  <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <span className="border border-white px-6 py-3 text-xs uppercase tracking-[0.35em] backdrop-blur-sm bg-black/30">
      SHOP NOW
    </span>
  </div>

</div>

<div className="mt-8 text-center">
  <h3 className="text-sm uppercase tracking-[0.35em]">
    {product.title}
  </h3>

  <p className="mt-3 text-zinc-500 tracking-[0.15em]">
    ${product.variants?.nodes?.[0]?.price?.amount}
  </p>

  <p className="mt-4 text-xs uppercase tracking-[0.35em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    View Product →
  </p>
</div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}