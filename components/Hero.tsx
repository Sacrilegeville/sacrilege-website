import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image */}
     <img
  src="/images/hero2.png"
  alt="Sacrilege Hero"
  className="absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-center pointer-events-none"
>
    </img>      {/* Dark Overlay */}
     <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/80 pointer-events-none" />
      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center text-center px-6 md:px-8">
  <div className="max-w-3xl">

    <p className="uppercase tracking-[0.5em] text-xs text-zinc-400">
      SACRILEGE
    </p>

    <h1 className="mt-6 text-5xl md:text-7xl font-light uppercase tracking-[0.18em]">
      IRREVERENCE
    </h1>

    <p className="mt-6 text-sm md:text-base uppercase tracking-[0.35em] text-zinc-400">
      Heavyweight Thermals • Baggy Sweats
    </p>

    <Link
      href="/#drop001"
      className="inline-flex mt-12 h-14 items-center justify-center rounded-full border border-white/60 bg-black/25 backdrop-blur-sm px-12 uppercase tracking-[0.35em] text-sm font-medium transition-all duration-500 hover:bg-white hover:text-black hover:border-white"
    >
      SHOP DROP 001
    </Link>

  </div>
</div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 z-20">

        <div className="animate-pulse">

          <div className="mx-auto h-12 w-px bg-white/50"></div>

          <p className="mt-3 text-[11px] uppercase tracking-[0.45em] text-zinc-400">
            SCROLL
          </p>

        </div>

      </div>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}