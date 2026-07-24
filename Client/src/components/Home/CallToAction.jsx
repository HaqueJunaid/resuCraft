import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const CallToAction = () => {
  const navigator = useNavigate();
  
  return (
    <div className="w-full bg-black py-24 lg:py-36 relative overflow-hidden flex justify-center">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1000px] h-[500px] bg-green-500/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="w-[92%] max-w-5xl mx-auto relative group">
        
        {/* Animated glowing border effect wrapper */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-green-500/0 via-green-500/50 to-emerald-500/0 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Main Glassmorphism Card */}
        <div className="relative flex flex-col items-center justify-center text-center bg-neutral-950/80 backdrop-blur-2xl border border-neutral-800/80 group-hover:border-green-500/30 rounded-3xl p-8 sm:p-12 lg:p-20 overflow-hidden transition-colors duration-500">
          
          {/* Inner card mesh gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-green-500/15 rounded-[100%] blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-8 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <Sparkles size={14} className="text-green-400" />
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-green-400">
                AI-Powered Precision
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white via-neutral-100 to-neutral-400 max-w-3xl leading-[1.1] sm:leading-[1.1] tracking-tight">
              Ready to land your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">
                dream job?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-neutral-400 text-sm md:text-lg mt-6 max-w-xl leading-relaxed px-2">
              Join thousands of professionals elevating their careers. Start building your ATS-friendly resume today and get noticed by top recruiters.
            </p>

            {/* CTA Button */}
            <button 
              onClick={() => navigator("/app")} 
              className="mt-10 w-full sm:w-auto flex justify-center group/btn relative px-8 py-3.5 sm:py-4 bg-linear-to-r from-green-500 to-emerald-600 text-neutral-950 font-bold text-sm md:text-base rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] active:scale-[0.97] overflow-hidden items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Building for Free 
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </span>
              {/* Button Glare Animation */}
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
            </button>
            
            <p className="text-[11px] text-neutral-500 mt-4">
              No credit card required • Free professional templates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
