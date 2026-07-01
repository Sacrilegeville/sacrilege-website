export default function LaunchPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <img
       src="/images/hero2.png"
        alt="Sacrilege"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center -translate-y-20 text-center px-8">
        <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">
          SACRILEGE
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light uppercase tracking-[0.18em]">
          IRREVERENCE
        </h1>

        <p className="mt-6 uppercase tracking-[0.35em] text-zinc-400">
          Limited Release
        </p>
<div className="mt-16 grid grid-cols-4 gap-8 text-center">

  <div>
    <p className="text-5xl md:text-6xl font-light">07</p>
    <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
      Days
    </p>
  </div>

  <div>
    <p className="text-5xl md:text-6xl font-light">18</p>
    <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
      Hours
    </p>
  </div>

  <div>
    <p className="text-5xl md:text-6xl font-light">42</p>
    <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
      Minutes
    </p>
  </div>

  <div>
    <p className="text-5xl md:text-6xl font-light">09</p>
    <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
      Seconds
    </p>
  </div>

</div>
<button className="mt-16 rounded-full border border-white/20 px-10 py-4 uppercase tracking-[0.35em] text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
  EARLY ACCESS
</button>
      </div>

    </main>
  );
}