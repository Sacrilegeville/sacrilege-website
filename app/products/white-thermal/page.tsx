export default function BlackThermalPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Product Image */}
          <div>

            <img
              src="/images/white.jpg"
              alt="WHITE THERMAL"
              className="w-full object-cover"
            />

          </div>

          {/* Product Info */}
          <div className="sticky top-32">

            <p className="uppercase tracking-[0.4em] text-gray-500">
              Drop 001
            </p>

            <h1 className="text-6xl font-black mt-5">
              White Thermal
            </h1>

            <p className="text-3xl mt-6">
              $79
            </p>

            <p className="text-gray-400 leading-8 mt-10">
              Heavyweight cotton thermal with a slightly cropped fit,
              distressed finish and signature SACRILEGE graphics.
            </p>

            <h3 className="uppercase tracking-[0.3em] mt-12 text-sm">
              Size
            </h3>

            <div className="flex gap-3 mt-5">

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition">
                S
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition">
                M
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition">
                L
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition">
                XL
              </button>

            </div>

            <button className="w-full mt-12 bg-white text-black py-5 uppercase tracking-[0.4em] font-medium hover:bg-gray-200 transition-all duration-300">
  ADD TO BAG
</button>
<div className="mt-12 border-t border-white/10 pt-10 space-y-6">

  <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
    MODEL IS 5'10" WEARING SIZE LARGE
  </p>

  <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
    IN PRODUCTION
    <br />
    SHIPS IN 3–5 WEEKS
  </p>

  <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
    SHIPS FROM U.S. WAREHOUSE
  </p>

  <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
    NO DUTIES FOR U.S. ORDERS
  </p>

</div>
          </div>

        </div>

      </section>

      {/* On Body Gallery */}

      <section className="max-w-7xl mx-auto px-8 pb-32">

       <h2 className="text-5xl font-black mb-12 uppercase tracking-[0.15em]">
  CAMPAIGN
</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/images/white on body.png"
            className="w-full"
            alt=""
          />

          <img
            src="/images/white baggy.png"
            className="w-full"
            alt=""
          />

        </div>

      </section>
{/* COMPANION PIECE */}

{/* COMPANION PIECE*/}

<section className="max-w-3xl mx-auto py-40 px-8 text-center border-t border-white/10">

  <p className="uppercase tracking-[0.6em] text-gray-500 text-sm">
    COMPANION PIECE
  </p>

  <h2 className="text-6xl font-black mt-8">
  WHITE BAGGY SWEATS
</h2>

  <p className="text-2xl text-gray-400 mt-6">
    $79
  </p>

  <p className="max-w-xl mx-auto mt-10 text-gray-500 leading-8">
    Designed alongside the White Thermal.
    Built with the same heavyweight construction,
    oversized fit, and distressed finish.
  </p>

 <a
  href="/products/white-baggy-sweats"
  className="inline-block mt-14 border border-white px-12 py-5 uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all duration-500"
>
  View Pants →
</a>

</section>

</main>
);
}