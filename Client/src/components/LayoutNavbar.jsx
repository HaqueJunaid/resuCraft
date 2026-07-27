import React from "react";
import Logo from "./Logo";
import { LogOut } from "lucide-react";

const LayoutNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-100 w-full px-4 lg:px-6 py-4 bg-neutral-950 backdrop-blur-xl border-b border-neutral-900 print:hidden">
      <div className="w-full max-w-7xl flex items-center justify-between mx-auto">
        {/* Logo and Separator Badge */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden sm:inline-block h-4 w-px bg-neutral-800"></span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] text-green-400 font-mono font-semibold tracking-wider">
            DASHBOARD
          </span>
        </div>

        {/* User profile & actions */}
        <div className="flex items-center justify-center gap-4">
          <div className="relative group cursor-pointer">
            <div className="w-9 h-9 overflow-hidden bg-neutral-900 rounded-full border border-neutral-800 group-hover:border-green-500/40 transition-colors duration-300">
              <img
                src="/avatar.png"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            {/* Online status indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-neutral-950 shadow-md"></span>
          </div>

          <button className="flex items-center justify-center gap-2 text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700/80 transition-all duration-300 px-4 rounded-xl py-2 text-xs sm:text-sm font-semibold cursor-pointer active:scale-[0.98]">
            <LogOut size={14} className="text-neutral-400" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
