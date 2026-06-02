import Image from "next/image";

function Navbar() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Toolkit",
      path: "/toolkit",
    },
    {
      id: 3,
      name: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between bg-transparent px-6 py-6 text-neutral-400">
      <div className="">
        <Image src="/logo.svg" width={100} height={40} alt="logo icon " />
      </div>
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="group relative py-2 text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-neutral-100"
              >
                {item.name}
                {/* Micro-interaction: Smooth expanding gradient underline */}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="group relative cursor-pointer overflow-hidden rounded-full border border-neutral-700 px-4 py-2 text-neutral-300 transition-all duration-500 ease-in-out hover:border-sky-500/50 hover:text-white hover:shadow-[0_0_25px_rgba(14,165,233,0.35)]">
        <div className="absolute inset-x-0 -bottom-px h-0.75 w-full bg-linear-to-r from-transparent via-sky-600 to-transparent transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
        <span className="relative z-10">Join the waitlist</span>
      </button>
    </div>
  );
}

export default Navbar;
