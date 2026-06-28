export default function GrayBaggySweatsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* PRODUCT IMAGE */}

          <div>

            <img
              src="/images/gray baggy.png"
              alt="Gray Baggy Sweats"
              className="w-full object-cover"
            />

          </div>

          {/* PRODUCT INFO */}

          <div className="sticky top-32">

            <p className="uppercase tracking-[0.45em] text-gray-500 text-sm">
              DROP 001
            </p>

            <h1 className="text-6xl font-black uppercase mt-6">
              GRAY BAGGY SWEATS
            </h1>

            <p className="text-3xl mt-8">
              $79
            </p>

            <p className="text-gray-400 leading-8 mt-10 max-w-lg">
              Heavyweight oversized sweatpants with a relaxed silhouette,
              distressed finish, premium cotton construction and signature
              SACRILEGE graphics.
            </p>

            <h3 className="uppercase tracking-[0.35em] text-sm mt-14">
              Size
            </h3>

            <div className="flex flex-wrap gap-3 mt-6">

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-300">
                XS / 28
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-300">
                S / 30
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-300">
                M / 32
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-300">
                L / 34
              </button>

              <button className="border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-300">
                XL / 36
              </button>

            </div>

            <button className="w-full mt-14 bg-white text-black py-5 uppercase tracking-[0.4em] hover:bg-gray-200 transition-all duration-300">
              ADD TO BAG
            </button>

            <div className="mt-14 border-t border-white/10 pt-8 space-y-6">

              <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
                MODEL IS 5'10" WEARING SIZE 30
              </p>

              <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
                IN PRODUCTION
                <br />
                SHIPS IN 3–5 WEEKS
              </p>

              <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
                SHIPS FROM U.S. WAREHOUSE
              </p>

              <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
                NO DUTIES FOR U.S. ORDERS
              </p>

            </div>

            <div className="mt-14 border-t border-white/10 pt-8">

              <h3 className="uppercase tracking-[0.35em] text-sm mb-8">
                SIZE GUIDE
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>XS</span>
                  <span>28</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>S</span>
                  <span>30</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>M</span>
                  <span>32</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>L</span>
                  <span>34</span>
                </div>

                <div className="flex justify-between">
                  <span>XL</span>
                  <span>36</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* CAMPAIGN */}

      <section className="max-w-7xl mx-auto px-8 pb-40">

        <div className="border-t border-white/10 pt-20">

          <p className="uppercase tracking-[0.45em] text-gray-500 text-sm">
            Campaign
          </p>

          <h2 className="text-5xl md:text-6xl font-black uppercase mt-6">
            GRAY BAGGY SWEATS
          </h2>

          <p className="text-gray-400 max-w-2xl mt-8 leading-8">
            Designed with an oversized silhouette and heavyweight construction.
            Finished with distressed detailing and premium craftsmanship to
            create a timeless everyday uniform.
          </p>

        </div>

        <div className="mt-20">

          <img
            src="/images/gray on body.png"
            alt="Gray Baggy Sweats Campaign"
            className="w-full object-cover"
          />

        </div>

      </section>

      {/* PAIR WITH */}

      <section className="max-w-3xl mx-auto py-40 px-8 text-center border-t border-white/10">

        <p className="uppercase tracking-[0.6em] text-gray-500 text-sm">
          PAIR WITH
        </p>

        <h2 className="text-6xl font-black uppercase mt-8">
          GRAY THERMAL
        </h2>

        <p className="text-2xl text-gray-400 mt-6">
          $79
        </p>

        <p className="max-w-xl mx-auto mt-10 text-gray-500 leading-8">
          The Gray Thermal was designed alongside these sweats to create a
          complete oversized uniform. Built with the same heavyweight cotton
          construction and distressed finish.
        </p>

        <a
          href="/products/gray-thermal"
          className="inline-block mt-14 border border-white px-12 py-5 uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all duration-500"
        >
          VIEW PRODUCT →
        </a>

      </section>

      {/* PRODUCT DETAILS */}

      <section className="max-w-6xl mx-auto px-8 pb-40">

        <div className="border-t border-white/10 pt-20">

          <h2 className="text-5xl font-black uppercase">
            PRODUCT DETAILS
          </h2>

          <div className="grid md:grid-cols-2 gap-20 mt-16">

            <div>

              <p className="uppercase tracking-[0.35em] text-gray-500 text-sm">
                FIT
              </p>

              <p className="mt-6 text-gray-300 leading-8">
                Oversized baggy fit with an extended rise, relaxed leg,
                and heavyweight drape.
              </p>

            </div>

            <div>

              <p className="uppercase tracking-[0.35em] text-gray-500 text-sm">
                MATERIAL
              </p>

              <p className="mt-6 text-gray-300 leading-8">
                Premium heavyweight cotton fleece with distressed finishing,
                built for everyday wear while maintaining structure.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* MORE FROM DROP 001 */}

      <section className="max-w-7xl mx-auto px-8 pb-40">

        <div className="border-t border-white/10 pt-20">

          <p className="uppercase tracking-[0.45em] text-gray-500 text-sm">
            More From Drop 001
          </p>

          <h2 className="text-5xl md:text-6xl font-black uppercase mt-6 mb-16">
            COMPLETE THE COLLECTION
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <a
              href="/products/black-thermal"
              className="group"
            >

              <img
                src="/images/black.jpg"
                alt="Black Thermal"
                className="w-full object-cover transition-all duration-500 group-hover:opacity-80"
              />

              <h3 className="mt-6 uppercase tracking-[0.25em]">
                BLACK THERMAL
              </h3>

            </a>

            <a
              href="/products/white-thermal"
              className="group"
            >

              <img
                src="/images/white.jpg"
                alt="White Thermal"
                className="w-full object-cover transition-all duration-500 group-hover:opacity-80"
              />

              <h3 className="mt-6 uppercase tracking-[0.25em]">
                WHITE THERMAL
              </h3>

            </a>

            <a
              href="/products/gray-thermal"
              className="group"
            >

              <img
                src="/images/grey.jpg"
                alt="Gray Thermal"
                className="w-full object-cover transition-all duration-500 group-hover:opacity-80"
              />

              <h3 className="mt-6 uppercase tracking-[0.25em]">
                GRAY THERMAL
              </h3>

            </a>

            <a
              href="/products/sand-thermal"
              className="group"
            >

              <img
                src="/images/sand.jpg"
                alt="Sand Thermal"
                className="w-full object-cover transition-all duration-500 group-hover:opacity-80"
              />

              <h3 className="mt-6 uppercase tracking-[0.25em]">
                SAND THERMAL
              </h3>

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}