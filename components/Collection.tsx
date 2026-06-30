import Link from "next/link";
import { getProducts } from "@/lib/shopify";

export default async function Collection() {
  const products = await getProducts();

  return (
    <section
      id="collection"
      className="bg-black text-white py-32 px-8 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="uppercase tracking-[0.45em] text-gray-500 mb-4">
            IRREVERENCE COLLECTION
          </p>

          <h2 className="text-6xl md:text-8xl font-black">
            COLLECTION
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {products.map((product: any) => (
            <div key={product.id} className="group">
              <div className="overflow-hidden rounded-xl bg-neutral-900">
                <img
                  src={product.featuredImage?.url}
                  alt={product.title}
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    $
                    {product.variants.nodes[0].price.amount}
                  </p>
                </div>

                <Link
                  href={`/products/${product.handle}`}
                  className="border border-white px-6 py-3 uppercase text-xs tracking-[0.35em]
                  hover:bg-white hover:text-black transition-all duration-300"
                >
                  Shop
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}