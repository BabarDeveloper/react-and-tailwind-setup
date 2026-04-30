const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/70 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-lg font-extrabold text-white shadow-lg shadow-indigo-900/60 transition-transform duration-300 group-hover:scale-105">
            B
          </span>
          <div className="leading-tight">
            <p className="text-base font-bold tracking-tight text-slate-100">
              Babar Ali
            </p>
            <p className="text-xs font-medium text-slate-400">
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
                className="text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-slate-500 hover:bg-slate-800 md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-900/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-400">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
