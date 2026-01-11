import React from "react";
import Logo from "./Logo";
import { LogOut } from "lucide-react";

const LayoutNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-100 w-full px-6 md:px-8 py-4.5 md:py-6 bg-neutral-950 border-b-2 border-neutral-900">
      <div className="md:w-3/4 flex items-center justify-between mx-auto">
        <Logo />
        <div className="flex items-center justify-center gap-2 md:gap-5">
          <div className="w-9 md:w-10 h-9 md:h-10 overflow-hidden bg-green-500 rounded-full border-2 border-green-100">
            <img
              src="/avatar.png"
              className="w-50 h-full object-center object-contain"
            />
          </div>
          <button className="flex items-center justify-center gap-1.5 md:gap-2 text-neutral-200 border border-green-500/50 hover:border-green-500 transition-all ease-in-out duration-300 px-4 rounded-4xl py-2 text-sm md:text-md cursor-pointer">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
