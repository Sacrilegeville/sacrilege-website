import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Drop001 from "@/components/Drop001";
import Editorial from "@/components/Editorial";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />
<div className="max-w-7xl mx-auto px-8 py-6 border-y border-white/10">
  <p className="text-center text-xs uppercase tracking-[0.4em] text-zinc-500">
    SIZING • THERMALS: TRUE TO SIZE • SWEATS: XS/28 • S/30 • M/32 • L/34 • XL/36
  </p>
</div>
      <Drop001 />

      <Editorial />

      <Newsletter />

      <Footer />

    </main>
  );
}