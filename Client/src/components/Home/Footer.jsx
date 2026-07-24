import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div id="contact" className="bg-black w-full pt-10">
      <footer className="w-full relative border-t border-neutral-800/60 bg-neutral-950/40">
        
        {/* Animated Top Glow Line */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-green-500/20 to-transparent"></span>
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] blur-[2px] bg-linear-to-r from-transparent via-green-500/60 to-transparent"></span>
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[2px] blur-[4px] bg-linear-to-r from-transparent via-green-400 to-transparent"></span>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-8">
              Empowering professionals worldwide with the most advanced AI resume building tools. Craft your perfect resume, optimize for ATS, and land your dream job faster.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Product Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-100 font-semibold mb-2">Product</h4>
              <Link to="/app" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Resume Builder</Link>
              <a href="#features" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Features</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Templates</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Pricing</a>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-100 font-semibold mb-2">Resources</h4>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Career Blog</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">ATS Guide</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Help Center</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Interview Prep</a>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-100 font-semibold mb-2">Company</h4>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">About Us</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Contact</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-neutral-400 hover:text-green-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-neutral-800/80 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500">
            <p>
              © {new Date().getFullYear()} <span className="text-green-500/80 font-semibold">ResuCraft</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-green-500 animate-pulse"></span> Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
