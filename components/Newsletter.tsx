export default function Newsletter() {
  return (
    <section className="bg-black border-t border-zinc-900 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">

        <p className="text-[11px] uppercase tracking-[0.55em] text-zinc-500">
          SACRILEGE
        </p>

        <h2 className="mt-5 text-4xl md:text-5xl font-semibold uppercase tracking-[0.08em]">
          JOIN THE ORDER
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-zinc-500 leading-7">
          Be first to know about future drops, limited releases, and exclusive access.
        </p>

        <div className="mt-12 flex flex-col gap-4 md:flex-row">

          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="h-14 flex-1 rounded-full border border-white/15 bg-white/5 px-6 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none transition-all duration-300"
          />

          <button
            type="button"
            className="h-14 rounded-full border border-white bg-white px-10 text-sm font-medium uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            JOIN
          </button>

        </div>

      </div>
    </section>
  );
}
