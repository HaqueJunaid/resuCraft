import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const HeroSection = () => {
  // eslint-disable-next-line react-hooks/immutability
  document.title = "resuCraft";

  const navLinks = [
    { label: "Home", path: "#home" },
    { label: "Features", path: "#features" },
    { label: "Testimonial", path: "#testimonial" },
    { label: "Contact", path: "#contact" },
  ];
  const menuBarRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  function closeNavbar() {
    setIsOpen(false);
  }

  function openNavbar() {
    setIsOpen(!isOpen);
  }

  const handleNavClick = (e, path, label) => {
    e.preventDefault();
    setActiveLink(label);
    closeNavbar();

    const sectionId = path.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <section
        id="home"
        className="relative overflow-hidden flex flex-col items-center max-md:px-2 bg-black text-white text-sm pb-28 pt-8 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] bg-top bg-no-repeat h-[110vh]"
      >
        <nav className="flex bg-black/20 backdrop-blur-md z-99 items-center border mx-4 w-full max-w-4xl justify-between border-neutral-500/50 px-4 py-2.5 rounded-full text-white">
          <Logo />
          <div
            ref={menuRef}
            id="menu"
            className="max-md:absolute max-md:bg-black/50 max-md:backdrop-blur max-md:top-0 transition-all duration-300 max-md:h-full max-md:w-full max-md:z-10 max-md:-left-full max-md:justify-center flex-col md:flex-row flex items-center gap-2"
          >
            {navLinks.map((nav, index) => (
              <a
                key={index}
                href={nav.path}
                onClick={(e) => handleNavClick(e, nav.path, nav.label)}
                className={`px-3 py-2 hover:text-green-600 transition-colors ease-in-out duration-300 ${
                  activeLink === nav.label
                    ? "border border-white/10 bg-white/10 font-medium rounded-full"
                    : ""
                }`}
              >
                {nav.label}
              </a>
            ))}

            <button
              onClick={closeNavbar}
              className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <button ref={menuBarRef} onClick={openNavbar} className="md:hidden">
            <svg
              className="size-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex gap-3">
            <Link
              to="/login"
              className="hidden md:block bg-transparent hover:bg-neutral-700/50 border border-neutral-600/70 text-white px-4 py-2 rounded-full transition"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {isOpen && (
          <div className="fixed border-r border-green-500/20 left-0 top-0 bg-linear-to-br from-green-500 to-green-700 z-99 w-2/3 h-screen py-6 px-5 overflow-hidden flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {navLinks.map((nav, index) => (
                <a
                  key={index}
                  href={nav.path}
                  onClick={(e) => handleNavClick(e, nav.path, nav.label)}
                  className="hover:text-green-600 transition-colors ease-in-out duration-300 text-2xl"
                >
                  {nav.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="block md:hidden bg-transparent border border-neutral-100 text-center text-white px-4 py-2 rounded-full"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="block md:hidden bg-white text-center text-green-600 px-4 py-2 rounded-full"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 rounded-full border border-green-900 bg-green-700/15 text-xs">
          <div className="flex items-center">
            <img
              className="size-7 rounded-full border-3 border-white hover:z-10 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
            />
            <img
              className="size-7 rounded-full border-3 border-white -translate-x-2 hover:z-10 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
            />
            <img
              className="size-7 rounded-full border-3 border-white -translate-x-4 hover:z-10 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3"
            />
          </div>
          <p className="-translate-x-2">Create your resume like our users </p>
        </div>

        <h1 className="text-4xl md:text-7xl text-center font-semibold max-w-5xl mt-5 bg-linear-to-r from-white to-[#748298] text-transparent bg-clip-text">
          Build Professional{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 to-green-600">
            Resume
          </span>{" "}
          with AI
        </h1>

        <p className="text-slate-300 md:text-base max-md:px-2 text-center max-w-2xl mt-3">
          Build your standout resume with AI-powered suggestions and
          enhancements.
        </p>

        <div className="flex items-center gap-2 mt-8 text-sm">
          <Link
            to="/app"
            className="px-6 py-2.5 bg-green-600 hover:bg-green-700 transition rounded-full"
          >
            Get Started
          </Link>
          <Link
            to="/app"
            className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-2.5"
          >
            <span>Learn More</span>
            <svg
              className="mt-0.5"
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25.5 4.75 4l-3.5 3.5"
                stroke="currentColor"
                stroke-opacity=".4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="relative left-34 lg:left-0 gap-14 mt-14 max-md:px-2 w-2xl md:relative md:mx-auto md:w-[80%] lg:w-[60%]">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[60%] h-px blur-[1px] bg-linear-to-r from-transparent via-green-400/50 to-transparent"></span>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[60%] h-px blur-[3px] bg-linear-to-r from-transparent via-green-400 to-transparent"></span>
          <div className="relative w-full border border-b-0 border-neutral-700/30 h-[50vh] rounded-tl-2xl rounded-tr-2xl px-5 pt-5">
            <div className="relative w-full bg-neutral-700/50 h-full rounded-tl-xl rounded-tr-xl">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[60%] h-px blur-[1px] bg-linear-to-r from-transparent via-green-400/30 to-transparent"></span>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[40%] h-px blur-[2px] bg-linear-to-r from-transparent via-green-400 to-transparent"></span>
              <img
                src="/hero.png"
                alt="hero-image"
                className="rounded-tl-xl rounded-tr-xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-32 bg-linear-to-t from-black via-black/50 to-black/2 absolute bottom-0"></div>
      </section>
    </div>
  );
};

export default HeroSection;
