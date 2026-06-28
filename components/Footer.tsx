import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-24">

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div className="flex flex-col items-center text-center">

          {/* Logo */}

          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.45em]">
            SACRILEGE
          </h2>

          <p className="mt-4 text-xs uppercase tracking-[0.45em] text-zinc-500">
            DROP 001
          </p>

          {/* Navigation */}

          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-10">

            <Link
              href="/collection"
              className="text-xs uppercase tracking-[0.3em] text-zinc-500 transition-all duration-300 hover:text-white"
            >
              Collection
            </Link>

            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.3em] text-zinc-500 transition-all duration-300 hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="/faq"
              className="text-xs uppercase tracking-[0.3em] text-zinc-500 transition-all duration-300 hover:text-white"
            >
              FAQ
            </Link>

          </div>

          {/* Divider */}

<div className="mt-16 h-px w-full max-w-md bg-white/10" />

{/* Socials */}

<div className="mt-10 flex items-center justify-center gap-8">

  <a
    href="https://www.instagram.com/sacrilegville"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs uppercase tracking-[0.35em] text-zinc-500 hover:text-white transition"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@sacrilegehills?_r=1&_t=ZP-97b6Z1hQJQ7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs uppercase tracking-[0.35em] text-zinc-500 hover:text-white transition"
  >
    TikTok
  </a>

</div>

{/* Bottom */}

<p className="mt-10 text-[11px] uppercase tracking-[0.35em] text-zinc-600">
  © 2026 SACRILEGE. ALL RIGHTS RESERVED.
</p>

        </div>

      </div>

    </footer>
  );
}