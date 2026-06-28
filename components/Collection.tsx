const products = [
  {
    name: "Black Thermal",
    price: "$79",
    image: "/images/black on body.png",
  },
  {
    name: "White Thermal",
    price: "$79",
    image: "/images/white on body.png",
  },
  {
    name: "Gray Thermal",
    price: "$79",
    image: "/images/gray on body.png",
  },
  {
    name: "Black Baggy Pants",
    price: "$79",
    image: "/images/black baggy.png",
  },
  {
    name: "Sand Baggy Pants",
    price: "$79",
    image: "/images/Sand baggy.png",
  },
  {
    name: "Full Bundle",
    price: "$149",
    image: "/images/black on body.png",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-black text-white py-32 px-8 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p className="uppercase tracking-[0.45em] text-gray-500 mb-4">
            Drop 001
          </p>

          <h2 className="text-6xl md:text-8xl font-black">
            COLLECTION
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {products.map((product) => (
            <div
              key={product.name}
              className="group"
            >
              <div className="overflow-hidden rounded-xl bg-neutral-900">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="flex items-center justify-between mt-6">

                <div>

                  <h3 className="text-2xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {product.price}
                  </p>

                </div>

                <button
                  className="border border-white px-6 py-3 uppercase text-xs tracking-[0.35em]
                  hover:bg-white hover:text-black transition-all duration-300"
                >
                  Shop
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}