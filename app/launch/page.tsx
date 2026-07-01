export default function LaunchPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <img
        src="/images/hero1.png"
        alt="Sacrilege"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-8">

        <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">
          SACRILEGE
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light uppercase tracking-[0.18em]">
          IRREVERENCE
        </h1>

        <p className="mt-6 uppercase tracking-[0.35em] text-zinc-400">
          Limited Release
        </p>

      </div>

    </main>
  );
}