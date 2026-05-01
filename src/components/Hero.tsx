const Hero = () => {
  return (
    <div className="bg-[#091413]">
      <section className="overflow-hidden pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="px-6 text-lg font-medium text-[#408A71]">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-[#B0E4CC] sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
              Turn your visitors into profitable
              <span className="relative inline-flex sm:inline">
                <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#285A48] to-[#408A71] opacity-50 blur-lg"></span>
                <span className="relative"> business </span>
              </span>
            </p>

            <div className="mt-9 px-8 sm:flex sm:items-center sm:justify-center sm:space-x-5 sm:px-0">
              <a
                href="#"
                title=""
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-transparent bg-[#B0E4CC] px-8 py-3 text-lg font-bold text-[#091413] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9bd7bc] focus:outline-none focus:ring-2 focus:ring-[#B0E4CC] focus:ring-offset-2 focus:ring-offset-[#091413] sm:w-auto"
                role="button"
              >
                Get more customers
              </a>

              <a
                href="#"
                title=""
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-[#408A71] px-6 py-3 text-lg font-bold text-[#B0E4CC] transition-all duration-200 hover:border-[#B0E4CC] hover:bg-[#285A48]/40 focus:bg-[#285A48]/40 focus:text-[#B0E4CC] focus:outline-none focus:ring-2 focus:ring-[#408A71] focus:ring-offset-2 focus:ring-offset-[#091413] sm:mt-0 sm:w-auto"
                role="button"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Watch free demo
              </a>
            </div>

            <p className="mt-8 text-base text-[#408A71]">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gradient-to-b from-[#091413] to-[#285A48]/35"></div>
            <div className="relative mx-auto">
              <div className="mx-auto lg:max-w-6xl">
                <img
                  className="scale-110 rounded-2xl border border-[#285A48]/40 shadow-2xl shadow-[#091413]/70"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  alt="Hero illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
