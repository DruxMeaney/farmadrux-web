import Link from "next/link";

export default function FotoFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm tracking-[0.25em] text-neutral-500">
          <span className="text-white font-semibold">DRUX</span> FOTO
        </p>
        <p className="text-xs text-neutral-600 text-center">
          &copy; {new Date().getFullYear()} Andrés Portilla Martínez · Un
          proyecto de{" "}
          <Link href="/" className="text-neutral-400 hover:text-fuchsia transition-colors">
            FARMADRUX
          </Link>
        </p>
        <a
          href="https://instagram.com/farmadrux"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-500 hover:text-white transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
