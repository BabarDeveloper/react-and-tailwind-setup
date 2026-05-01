import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#285A48]/70 bg-[#091413]/70 backdrop-blur-2xl"
          : "border-b border-transparent bg-[#091413]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#408A71] to-[#285A48] text-lg font-extrabold text-white shadow-lg shadow-[#091413]/70 transition-transform duration-300 group-hover:scale-105">
            B
          </span>
          <div className="leading-tight">
            <p className="text-base font-bold tracking-tight text-[#B0E4CC]">
              Babar Ali
            </p>
            <p className="text-xs font-medium text-[#408A71]">
              Software Engineer
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {["Home", "Features", "Showcase", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-[#B0E4CC]/90 transition-colors duration-200 hover:text-[#B0E4CC]"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-[#408A71] px-4 py-2 text-sm font-semibold text-[#B0E4CC] transition-colors duration-200 hover:border-[#B0E4CC] hover:bg-[#285A48]/40 md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-[#B0E4CC] px-5 py-2 text-sm font-semibold text-[#091413] shadow-md shadow-[#091413]/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9bd7bc]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
