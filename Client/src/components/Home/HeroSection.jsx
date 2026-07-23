import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const HeroSection = () => {
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
    <div className="bg-black text-white relative">
      {/* Local keyframe animations */}
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes orbit-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.15); }
        }
        .anim-subtle-bounce {
          animation: subtle-bounce 6s ease-in-out infinite;
        }
        .anim-orbit-glow {
          animation: orbit-glow 10s ease-in-out infinite;
        }
      `}</style>

      {/* Main hero section */}
      <section
        id="home"
        className="relative overflow-hidden flex flex-col items-center max-md:px-4 text-sm pb-28 pt-8 bg-linear-to-b from-[#060806] via-black to-black min-h-screen"
      >
        {/* Background Grids & Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size[4rem_4rem] pointer-events-none"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-green-500/10 rounded-full blur-[150px] anim-orbit-glow pointer-events-none"></div>
        <div className="absolute bottom-20 left-1/3 w-100 h-100 bg-emerald-500/5 rounded-full blur-[120px] anim-orbit-glow pointer-events-none" style={{ animationDelay: '2s' }}></div>

        {/* Navigation Bar */}
        <nav className="flex bg-neutral-900/30 backdrop-blur-xl z-99 items-center border mx-4 w-full max-w-5xl justify-between border-neutral-800/80 px-5 py-3 rounded-full text-white shadow-xl relative">
          <Logo />
          <div
            ref={menuRef}
            id="menu"
            className="max-md:hidden flex items-center gap-1.5"
          >
            {navLinks.map((nav, index) => (
              <a
                key={index}
                href={nav.path}
                onClick={(e) => handleNavClick(e, nav.path, nav.label)}
                className={`px-4 py-1.5 hover:text-green-400 text-neutral-300 font-medium text-xs transition-colors duration-300 rounded-full ${activeLink === nav.label
                    ? "bg-white/5 border border-white/10 text-white"
                    : ""
                  }`}
              >
                {nav.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex gap-3">
            <Link
              to="/login"
              className="bg-transparent hover:bg-neutral-800/40 text-neutral-300 hover:text-white px-5 py-2 rounded-full transition-colors duration-300 text-xs font-semibold"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-neutral-950 font-bold px-5 py-2 rounded-full transition-all duration-300 text-xs shadow-lg shadow-green-500/10 hover:shadow-green-500/25 active:scale-[0.97]"
            >
              Sign Up
            </Link>
          </div>

          <button ref={menuBarRef} onClick={openNavbar} className="md:hidden text-neutral-300 hover:text-white transition">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed border-r border-green-500/10 left-0 top-0 bg-neutral-950/95 backdrop-blur-2xl z-99 w-2/3 h-screen py-8 px-6 overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="flex flex-col gap-6">
              <div className="mb-4">
                <Logo />
              </div>
              {navLinks.map((nav, index) => (
                <a
                  key={index}
                  href={nav.path}
                  onClick={(e) => handleNavClick(e, nav.path, nav.label)}
                  className="text-neutral-300 hover:text-green-400 transition-colors duration-300 text-lg font-semibold"
                >
                  {nav.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="bg-transparent border border-neutral-800 text-center text-neutral-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-center text-neutral-950 px-4 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-green-500/10 hover:bg-green-400 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}

        {/* Trust badge */}
        <div className="flex flex-wrap items-center justify-center p-1.5 mt-28 rounded-full border border-green-950/80 bg-green-500/5 text-xs text-green-400 font-medium px-4 shadow-inner relative">
          <div className="flex items-center mr-2">
            <img
              className="size-6 rounded-full border border-neutral-900 hover:z-10 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
            />
            <img
              className="size-6 rounded-full border border-neutral-900 -translate-x-1.5 hover:z-10 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
            />
            <img
              className="size-6 rounded-full border border-neutral-900 -translate-x-3 hover:z-10 hover:-translate-y-0.5 transition-all ease-in-out duration-300"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3"
            />
          </div>
          <span className="-translate-x-1.5 text-[11px]">Join thousands of users building standout resumes</span>
        </div>

        {/* Main Heading Text */}
        <h1 className="text-4xl md:text-7xl text-center font-extrabold tracking-tight max-w-4xl mt-6 bg-linear-to-b from-white via-neutral-100 to-neutral-400 text-transparent bg-clip-text leading-tight">
          Build Professional{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-emerald-500 to-teal-500">
            Resume
          </span>{" "}
          with AI
        </h1>

        <p className="text-neutral-400 text-sm md:text-base max-md:px-6 text-center max-w-xl mt-4 leading-relaxed">
          Create standout, standard-compliant resumes in minutes with AI-powered suggestions, live analytics, and professional layouts.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 mt-10 text-sm z-10">
          <Link
            to="/app"
            className="px-6 py-3 bg-linear-to-r from-green-50 to-green-600 hover:from-green-400 hover:to-green-500 text-neutral-950 font-bold rounded-full transition-all duration-300 shadow-lg shadow-green-500/10 hover:shadow-green-500/25 active:scale-[0.97]"
          >
            Get Started Free
          </Link>
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, "#features", "Features")}
            className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 rounded-full px-6 py-3 transition duration-300"
          >
            <span>Learn More</span>
            <svg
              className="mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25.5 4.75 4l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Interactive App Window Preview (replaces static /hero.png image) */}
        <div className="relative gap-14 mt-20 max-md:px-4 w-[90%] md:w-[80%] lg:w-[65%] anim-subtle-bounce">
          {/* Top glowing line decoration */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[80%] h-px blur-[1px] bg-linear-to-r from-transparent via-green-500/50 to-transparent"></span>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[60%] h-0.75 blur-[3px] bg-linear-to-r from-transparent via-green-400 to-transparent"></span>

          <div className="relative w-full border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-xl rounded-t-2xl shadow-2xl p-4 md:p-6 select-none group hover:border-green-500/30 transition-all duration-500">
            {/* Browser window controls */}
            <div className="flex items-center gap-1.5 mb-4 border-b border-neutral-900 pb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <div className="h-5 w-48 bg-neutral-900/60 rounded-md mx-auto border border-neutral-800/30 text-[9px] flex items-center justify-center text-neutral-500 font-mono">
                resucraft.app/dashboard
              </div>
            </div>

            {/* Layout: Sidebar + Content */}
            <div className="flex gap-4 md:gap-6 h-[32vh] md:h-[40vh] overflow-hidden">
              {/* Mock Sidebar */}
              <div className="hidden sm:flex sm:flex-col gap-4 w-32 border-r border-neutral-900/60 pr-4">
                <div className="h-6 w-20 bg-green-500/10 border border-green-500/20 rounded-md"></div>
                <div className="space-y-2">
                  <div className="h-6 w-full bg-green-500/10 rounded-lg border border-green-500/20"></div>
                  <div className="h-6 w-full bg-neutral-900/40 rounded-lg"></div>
                  <div className="h-6 w-full bg-neutral-900/40 rounded-lg"></div>
                  <div className="h-6 w-full bg-neutral-900/40 rounded-lg"></div>
                </div>
              </div>

              {/* Mock Main Content */}
              <div className="flex-1 space-y-4 md:space-y-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-neutral-800 rounded-md"></div>
                    <div className="h-2.5 w-20 bg-neutral-900/60 rounded-md"></div>
                  </div>
                  <div className="h-7 w-20 bg-green-500 text-neutral-950 text-[10px] font-bold rounded-lg flex items-center justify-center">
                    + New Resume
                  </div>
                </div>

                {/* Grid of mock cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { title: "Software Engineer", color: "#9333ea", progress: "92%" },
                    { title: "Product Manager", color: "#d97706", progress: "85%" },
                    { title: "UI/UX Designer", color: "#0284c7", progress: "98%" }
                  ].map((card, i) => (
                    <div key={i} className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/30 space-y-3 hover:border-neutral-800/80 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold" style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                          RE
                        </div>
                        <span className="text-[9px] text-green-400 font-mono bg-green-950/40 px-1.5 py-0.5 rounded font-bold">
                          {card.progress}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-200">{card.title}</h4>
                        <p className="text-[9px] text-neutral-500 mt-0.5 font-mono">Updated 2h ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-32 bg-linear-to-t from-black via-black/50 to-transparent absolute bottom-0"></div>
      </section>
    </div>
  );
};

export default HeroSection;
