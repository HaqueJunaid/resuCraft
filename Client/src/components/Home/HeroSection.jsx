import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Sparkles, FileText, CheckCircle2 } from "lucide-react";

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
          50% { transform: translateY(-12px); }
        }
        @keyframes orbit-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.15); }
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
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] anim-orbit-glow pointer-events-none"></div>
        <div className="absolute bottom-40 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] anim-orbit-glow pointer-events-none" style={{ animationDelay: '2s' }}></div>

        {/* Navigation Bar */}
        <nav className="flex bg-neutral-900/40 backdrop-blur-xl z-99 items-center border mx-4 w-full max-w-5xl justify-between border-neutral-800/80 px-5 py-3 rounded-full text-white shadow-xl relative">
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
                    ? "bg-white/10 border border-white/10 text-white shadow-sm"
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
              className="bg-transparent hover:bg-neutral-800/60 text-neutral-300 hover:text-white px-5 py-2 rounded-full transition-colors duration-300 text-xs font-semibold"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="relative group overflow-hidden bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-neutral-950 font-bold px-5 py-2 rounded-full transition-all duration-300 text-xs shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] active:scale-[0.97]"
            >
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
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
        <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 md:mt-28 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-sm text-xs text-green-400 font-medium px-4 shadow-[0_0_15px_rgba(34,197,94,0.05)] relative z-10 transition-all hover:bg-green-500/15">
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
          <span className="-translate-x-1.5 text-[11px] flex items-center gap-1.5"><CheckCircle2 className="size-3 text-green-400" /> Join thousands building standout resumes</span>
        </div>

        {/* Main Heading Text */}
        <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[5rem] text-center font-extrabold tracking-tight max-w-5xl mt-8 bg-linear-to-b from-white via-neutral-100 to-neutral-400 text-transparent bg-clip-text z-10">
          Build Professional{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-green-400 via-emerald-500 to-teal-500 pb-2">
            Resume
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-500/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
            </svg>
          </span>{" "}
          with AI
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-md:px-4 text-center max-w-2xl mt-6 leading-relaxed z-10">
          Craft standout, standard-compliant resumes in minutes with AI-powered suggestions, live analytics, and pixel-perfect layouts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10 text-sm z-10 w-[90%] sm:w-auto">
          <Link
            to="/app"
            className="w-full sm:w-auto flex justify-center group relative px-8 py-3.5 bg-linear-to-r from-green-500 to-emerald-600 text-neutral-950 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] active:scale-[0.97] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">Get Started Free <Sparkles className="size-4" /></span>
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
          </Link>
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, "#features", "Features")}
            className="w-full sm:w-auto flex justify-center items-center gap-2 bg-neutral-900/80 backdrop-blur hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-neutral-600 rounded-full px-8 py-3.5 transition duration-300"
          >
            <span>Learn More</span>
            <svg
              className="mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity group-hover:translate-x-1"
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

        {/* Interactive App Window Preview (replaces static image) */}
        <div className="relative mt-16 md:mt-24 w-[98%] sm:w-[90%] md:w-[85%] lg:w-[70%] z-10">
          
          {/* Floating Badges */}
          <div className="absolute -top-6 -right-2 sm:-right-6 lg:-right-12 px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-900/90 backdrop-blur-md border border-green-500/40 rounded-full flex items-center gap-2 sm:gap-2.5 anim-subtle-bounce shadow-xl z-20 scale-90 sm:scale-100 origin-bottom-right" style={{animationDelay: '1s'}}>
            <div className="p-1 sm:p-1.5 bg-green-500/20 rounded-full"><Sparkles size={14} className="text-green-400" /></div>
            <span className="text-[10px] sm:text-xs font-bold text-neutral-200 tracking-wide">AI Optimized</span>
          </div>
          
          <div className="absolute top-24 sm:top-32 -left-2 sm:-left-6 lg:-left-16 px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-900/90 backdrop-blur-md border border-emerald-500/40 rounded-full flex items-center gap-2 sm:gap-2.5 anim-subtle-bounce shadow-xl z-20 scale-90 sm:scale-100 origin-top-left" style={{animationDelay: '0.2s'}}>
            <div className="p-1 sm:p-1.5 bg-emerald-500/20 rounded-full"><FileText size={14} className="text-emerald-400" /></div>
            <span className="text-[10px] sm:text-xs font-bold text-neutral-200 tracking-wide">98% ATS Match</span>
          </div>

          {/* Top glowing line decoration */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[80%] h-px blur-[2px] bg-linear-to-r from-transparent via-green-500/60 to-transparent"></span>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 block w-[60%] h-[2px] blur-[4px] bg-linear-to-r from-transparent via-green-400 to-transparent"></span>

          <div className="relative w-full border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-2xl rounded-t-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] p-4 md:p-6 select-none group hover:border-green-500/40 transition-all duration-500">
            
            {/* Browser window controls */}
            <div className="flex items-center gap-2 mb-5 border-b border-neutral-800/80 pb-4">
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-700 hover:bg-red-500 transition-colors"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-700 hover:bg-yellow-500 transition-colors"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-700 hover:bg-green-500 transition-colors"></span>
              <div className="h-6 w-64 bg-neutral-900/80 rounded-md mx-auto border border-neutral-800/50 text-[10px] flex items-center justify-center text-neutral-400 font-mono tracking-wider">
                <span className="text-green-500 mr-1">🔒</span> resucraft.app/builder
              </div>
            </div>

            {/* Layout: Sidebar + Content */}
            <div className="flex gap-4 md:gap-6 h-[35vh] md:h-[45vh] overflow-hidden relative">
              
              {/* Inner subtle glow for depth */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Mock Sidebar */}
              <div className="hidden sm:flex sm:flex-col gap-5 w-36 border-r border-neutral-800/80 pr-5 z-10">
                <div className="h-7 w-24 bg-green-500/15 border border-green-500/30 rounded-md flex items-center px-2 gap-2">
                  <div className="size-3 bg-green-400 rounded-full"></div>
                  <div className="h-1.5 w-12 bg-green-400/50 rounded-full"></div>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="h-7 w-full bg-green-500/10 rounded-lg border border-green-500/20 relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1 bg-green-500"></div>
                  </div>
                  <div className="h-7 w-full bg-neutral-900/50 rounded-lg border border-transparent"></div>
                  <div className="h-7 w-full bg-neutral-900/50 rounded-lg border border-transparent"></div>
                  <div className="h-7 w-full bg-neutral-900/50 rounded-lg border border-transparent"></div>
                </div>
              </div>

              {/* Mock Main Content */}
              <div className="flex-1 flex flex-col gap-4 z-10">
                
                {/* Editor Header */}
                <div className="flex justify-between items-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/60">
                  <div className="space-y-1.5">
                    <div className="h-3 w-32 bg-neutral-700 rounded-full"></div>
                    <div className="h-2 w-20 bg-neutral-800 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-neutral-800 rounded-lg border border-neutral-700"></div>
                    <div className="h-8 w-24 bg-green-500 text-neutral-950 text-[11px] font-bold rounded-lg flex items-center justify-center shadow-md shadow-green-500/20">
                      Download PDF
                    </div>
                  </div>
                </div>

                {/* Editor Body Split */}
                <div className="flex gap-4 flex-1 overflow-hidden">
                  {/* Form Mock */}
                  <div className="w-1/2 space-y-3 p-1">
                    <div className="h-3 w-24 bg-neutral-600 rounded-full mb-4"></div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-16 bg-neutral-700 rounded-full"></div>
                      <div className="h-9 w-full bg-neutral-900/80 border border-neutral-700/50 rounded-lg"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-12 bg-neutral-700 rounded-full"></div>
                        <div className="h-9 w-full bg-neutral-900/80 border border-neutral-700/50 rounded-lg"></div>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-12 bg-neutral-700 rounded-full"></div>
                        <div className="h-9 w-full bg-neutral-900/80 border border-neutral-700/50 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="space-y-1.5 mt-2 relative">
                      <div className="h-2 w-20 bg-neutral-700 rounded-full"></div>
                      <div className="h-16 w-full bg-neutral-900/80 border border-green-500/40 rounded-lg relative overflow-hidden">
                        <div className="absolute right-2 top-2 p-1 bg-green-500/20 rounded flex items-center justify-center"><Sparkles className="size-3 text-green-400"/></div>
                      </div>
                    </div>
                  </div>
                  {/* Preview Mock */}
                  <div className="w-1/2 bg-neutral-100 rounded-lg border border-neutral-700/30 p-4 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1.5 bg-green-500 text-[8px] font-bold text-neutral-950 rounded-bl-lg">LIVE</div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-8 rounded-full bg-neutral-300"></div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-3 w-32 bg-neutral-800 rounded-full"></div>
                        <div className="h-1.5 w-24 bg-neutral-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2 border-t border-neutral-300 pt-3">
                      <div className="h-1.5 w-20 bg-neutral-800 rounded-full mb-1"></div>
                      <div className="h-1 w-full bg-neutral-400 rounded-full"></div>
                      <div className="h-1 w-5/6 bg-neutral-400 rounded-full"></div>
                      <div className="h-1 w-4/6 bg-neutral-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="h-1.5 w-20 bg-neutral-800 rounded-full mb-1"></div>
                      <div className="h-1 w-full bg-green-500/60 rounded-full"></div>
                      <div className="h-1 w-11/12 bg-green-500/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-32 bg-linear-to-t from-black via-black/80 to-transparent absolute bottom-0 z-20"></div>
      </section>
    </div>
  );
};

export default HeroSection;
