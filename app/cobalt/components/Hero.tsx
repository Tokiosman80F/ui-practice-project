const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradients & Grid Lines */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>

      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[60px_60px]"></div>

      <div className="relative z-20 my-40 flex w-full flex-col items-center justify-center">
        <h1 className="max-w-3xl bg-linear-to-b from-neutral-50 to-neutral-600 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent selection:bg-cyan-200 selection:text-neutral-400">
          Unleash the power of intuitive finance
        </h1>
        <p className="mt-6 max-w-3xl text-center text-xl leading-relaxed font-medium text-neutral-400 selection:bg-cyan-200">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>

        <div className="mt-12 flex w-full max-w-2xl justify-center gap-2">
          <input
            type="text"
            placeholder="enter your email "
            className="flex-1 rounded-2xl border border-neutral-700 px-4 py-2 text-white transition duration-200 placeholder:text-neutral-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
          <button className="relative cursor-pointer overflow-hidden rounded-full border border-neutral-700 px-4 py-2 text-neutral-300">
            <div className="absolute inset-x-0 -bottom-px h-0.75 w-full bg-linear-to-r from-transparent via-sky-600 to-transparent"></div>
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
