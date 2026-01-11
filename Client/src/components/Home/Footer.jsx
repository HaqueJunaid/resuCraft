import Logo from "../Logo";

const Footer = () => {
  return (
    <div id="contact" className="bg-black w-full">
      <footer className="w-full relative">
      <span className="w-[60%] absolute top-0 left-1/2 -translate-x-1/2 h-px blur-[1px] bg-linear-to-r bg-transparent via-green-500 to-transparent"></span>
      <span className="w-[40%] absolute top-0 left-1/2 -translate-x-1/2 h-0.5 blur-[3px] bg-linear-to-r bg-transparent via-green-500/60 to-transparent"></span>
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <Logo />
          </div>
          <p className="text-center text-neutral-300 max-w-xl text-sm font-normal leading-relaxed">
            Empowering creators worldwide with the most advanced AI content
            creation tools. Transform your ideas into reality.
          </p>
        </div>
        <div className="border-t border-neutral-500/20">
          <div className="max-w-7xl text-neutral-100 mx-auto px-6 py-6 text-center text-sm font-normal">
            <a className="text-green-500" href="https://prebuiltui.com">resuCraft</a> ©2026. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
