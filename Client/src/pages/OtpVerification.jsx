import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { Mail, KeyRound, ArrowLeft } from "lucide-react";

const OtpVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  document.title = "resuCraft | Verify";
  const navigate = useNavigate();

  const otpRef = useRef(null);
  const emailRef = useRef(null);

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      if (otpRef.current?.value === "" || emailRef.current?.value === "") {
        toast.error("Please enter the OTP and email");
        return;
      }

      let res = await axios.post("http://localhost:8080/api/auth/verify-otp", {
        otp: otpRef.current?.value,
        email: emailRef.current?.value
      }, { withCredentials: true });

      console.log(res.data);

      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        toast.success("Account verified successfully");
        navigate("/app");
      }

    } catch (error) {
      console.error(error);
      toast.error("Failed to verify account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 flex relative overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute -bottom-40 -right-40 w-150 h-150 rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-150 h-150 rounded-full bg-green-500/10 blur-[150px] pointer-events-none"></div>

      {/* Split screen content */}
      <div className="flex w-full min-h-screen">

        {/* Left Side: Interactive Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 z-10">
          <div className="w-full max-w-md bg-neutral-900/30 md:bg-transparent p-6 md:p-0 rounded-2xl border border-neutral-800/50 md:border-none backdrop-blur-md md:backdrop-blur-none">
            <div className="text-center md:text-left mb-8">
              <Link to="/signup" className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-green-400 font-medium transition-colors mb-4 group cursor-pointer">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                Back to registration
              </Link>
              <h2 className="text-3xl font-extrabold text-neutral-100 tracking-tight mt-1">Verify Email</h2>
              <p className="text-sm text-neutral-400 mt-2">
                We've sent a 6-digit verification code to your email. Enter it below to activate your account.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-400 block pl-1">Email Address</label>
                <div className="flex items-center w-full bg-neutral-950/80 focus-within:bg-neutral-950 border border-neutral-800 focus-within:border-green-500/60 h-12 rounded-xl overflow-hidden pl-4 pr-3 gap-3 transition-all duration-300 focus-within:shadow-[0_0_15px_rgba(34,197,94,0.06)]">
                  <Mail size={18} className="text-neutral-500" />
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="name@example.com"
                    className="bg-transparent text-neutral-200 placeholder-neutral-600 outline-none text-sm w-full h-full"
                    required
                  />
                </div>
              </div>

              {/* OTP Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-400 block pl-1">6-Digit Code</label>
                <div className="flex items-center w-full bg-neutral-950/80 focus-within:bg-neutral-950 border border-neutral-800 focus-within:border-green-500/60 h-12 rounded-xl overflow-hidden pl-4 pr-3 gap-3 transition-all duration-300 focus-within:shadow-[0_0_15px_rgba(34,197,94,0.06)]">
                  <KeyRound size={18} className="text-neutral-500" />
                  <input
                    ref={otpRef}
                    type="text"
                    placeholder="123456"
                    maxLength={6}
                    className="bg-transparent text-neutral-200 placeholder-neutral-600 outline-none text-sm w-full h-full font-mono tracking-widest text-left"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleVerify}
                className="w-full h-12 mt-6 rounded-xl text-neutral-950 bg-linear-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 transition-all duration-300 font-semibold text-sm cursor-pointer shadow-lg shadow-green-500/10 active:scale-[0.98] hover:shadow-green-500/20 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Mock Interactive Resume Preview (Hero Panel) */}
        <div className="hidden md:flex md:w-1/2 bg-[#060806] items-center justify-center relative border-l border-neutral-900/60 p-12 overflow-hidden">
          {/* Local keyframe animations */}
          <style>{`
            @keyframes float-slow {
              0%, 100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-12px) scale(1.02); }
            }
            @keyframes float-fast {
              0%, 100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-8px) scale(0.98); }
            }
            @keyframes pulse-glow {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.6; transform: scale(1.1); }
            }
            .anim-float-slow {
              animation: float-slow 6s ease-in-out infinite;
            }
            .anim-float-fast {
              animation: float-fast 5s ease-in-out infinite;
            }
            .anim-pulse-glow {
              animation: pulse-glow 8s ease-in-out infinite;
            }
          `}</style>

          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-size-[3rem_3rem]"></div>

          {/* Background radial glows */}
          <div className="absolute top-1/4 left-1/4 w-100 h-100 rounded-full bg-green-500/10 blur-[130px] anim-pulse-glow pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-emerald-500/5 blur-[130px] anim-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }}></div>

          <div className="relative z-10 w-full max-w-lg flex flex-col items-center">

            {/* Layered Cards Showcase Container */}
            <div className="relative w-full h-80 flex items-center justify-center mb-10">

              {/* Card 1: Main Resume Editor (Central element) */}
              <div className="absolute w-90 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-xl shadow-2xl anim-float-slow select-none hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-md font-bold text-neutral-950 shadow-lg shadow-green-500/20">
                    AM
                  </div>
                  <div className="flex-1">
                    <div className="h-4 w-28 bg-neutral-800 rounded-md mb-1.5"></div>
                    <div className="h-2.5 w-40 bg-neutral-800/60 rounded-md"></div>
                  </div>
                  <span className="text-[10px] text-green-400 font-mono bg-green-950/40 border border-green-800/40 px-2 py-0.5 rounded-full font-bold">
                    Online
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono">
                      <span>COMPLETENESS</span>
                      <span>95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-green-500 to-emerald-400 w-[95%] rounded-full"></div>
                    </div>
                  </div>

                  <hr className="border-neutral-800/60 my-3" />

                  <div className="space-y-2">
                    <div className="h-2 w-full bg-neutral-800/60 rounded-md"></div>
                    <div className="h-2 w-11/12 bg-neutral-800/60 rounded-md"></div>
                    <div className="h-2 w-3/4 bg-neutral-800/60 rounded-md"></div>
                  </div>
                </div>
              </div>

              {/* Card 2: ATS Checker Card (Overlay Top-Right) */}
              <div className="absolute top-2 -right-4 w-37.5 p-4 rounded-xl border border-neutral-800/90 bg-neutral-900/80 backdrop-blur-xl shadow-2xl anim-float-fast select-none flex flex-col items-center justify-center text-center hover:border-green-500/30 transition-all duration-300" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 rounded-full border-4 border-green-500/20 border-t-green-400 flex items-center justify-center mb-2 animate-spin" style={{ animationDuration: '4s' }}>
                  <span className="text-xs font-bold text-neutral-100 font-mono">98%</span>
                </div>
                <h5 className="text-[10px] font-bold text-neutral-300">ATS Score</h5>
                <p className="text-[8px] text-neutral-500">Perfect alignment</p>
              </div>

              {/* Card 3: Floating Template Indicator (Overlay Bottom-Left) */}
              <div className="absolute bottom-2 -left-4 w-40 p-4 rounded-xl border border-neutral-800/90 bg-neutral-900/80 backdrop-blur-xl shadow-2xl anim-float-fast select-none hover:border-green-500/30 transition-all duration-300" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-md shadow-green-500/40"></span>
                  <h5 className="text-[10px] font-bold text-neutral-300">Template Applied</h5>
                </div>
                <div className="h-6 w-full rounded-md bg-neutral-950 flex items-center px-2 border border-neutral-800 text-[9px] font-mono text-neutral-400 font-bold justify-between">
                  <span>Minimal Image</span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>

            </div>

            {/* Text descriptions */}
            <div className="text-center max-w-sm mt-4">
              <h3 className="text-2xl font-bold text-neutral-100 tracking-tight">Tailored templates for every industry.</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">From minimal-image layout to classic executive, choose the theme that represents you best.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default OtpVerification;