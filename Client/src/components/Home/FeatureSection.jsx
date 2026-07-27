import { useState } from "react";
import { Sparkles, Eye, Palette, Check, Wand2, FileText } from "lucide-react";
import Badge from "./Badge";

const FeatureSection = () => {
  // AI Bullet Enhancer State
  const [aiTextState, setAiTextState] = useState("idle"); // 'idle', 'optimizing', 'completed'
  const [typedText, setTypedText] = useState("Created a dashboard using React.");

  const handleAiOptimize = () => {
    if (aiTextState !== "idle") return;
    setAiTextState("optimizing");
    
    // Simulate AI loading/thinking
    setTimeout(() => {
      setAiTextState("completed");
      setTypedText("Architected high-performance React client dashboards, elevating user engagement by 42% and trimming load times by 1.4 seconds.");
    }, 1500);
  };

  const handleAiReset = () => {
    setAiTextState("idle");
    setTypedText("Created a dashboard using React.");
  };

  // Pixel-Perfect Style Customizer State
  const [accentColor, setAccentColor] = useState("emerald"); // emerald, sky, violet, rose
  const [fontFamily, setFontFamily] = useState("sans"); // sans, serif, mono

  // Color mappings
  const colorMap = {
    emerald: { text: "text-emerald-400", bg: "bg-emerald-500", border: "border-emerald-500/40", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
    sky: { text: "text-sky-400", bg: "bg-sky-500", border: "border-sky-500/40", glow: "shadow-[0_0_15px_rgba(14,165,233,0.15)]" },
    violet: { text: "text-violet-400", bg: "bg-violet-500", border: "border-violet-500/40", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
    rose: { text: "text-rose-400", bg: "bg-rose-500", border: "border-rose-500/40", glow: "shadow-[0_0_15px_rgba(244,63,94,0.15)]" },
  };

  const fontMap = {
    sans: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  };

  return (
    <div id="features" className="bg-black pt-36 pb-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge text="AI-powered features" />
          <h2 className="text-transparent bg-linear-to-r bg-clip-text from-neutral-200 via-neutral-100 to-neutral-400 mt-4 text-3xl md:text-5xl font-bold max-w-2xl tracking-tight leading-tight">
            Build Your Standout Resume with Next-Gen Features
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed mt-4">
            Explore advanced tools designed to make your resume shine—powered by the latest ATS insights and AI technologies.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Bullet Enhancer (Spans 2 cols) */}
          <div className="md:col-span-2 group relative border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.03)] overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-green-950/50 rounded-lg text-green-400 border border-green-800/30">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 font-sans">AI Bullet Enhancer</h3>
              </div>
              <p className="text-sm text-neutral-400 max-w-md mb-6 font-sans">
                Instantly turn simple sentences into impact-driven, metrics-focused professional accomplishments that catch recruiters' eyes.
              </p>
            </div>

            {/* Interactive Showcase */}
            <div className="bg-neutral-950/80 border border-neutral-800/50 rounded-xl p-4.5 relative overflow-hidden font-sans">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Resume Builder Editor</span>
                <span className="text-[10px] text-green-400 flex items-center gap-1 font-medium bg-green-500/10 px-2 py-0.5 rounded-full">
                  <span className="size-1.5 rounded-full bg-green-400 animate-pulse"></span> Ready
                </span>
              </div>
              
              <div className="min-h-[60px] flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  {aiTextState === "completed" ? (
                    <div className="size-5 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 text-green-400">
                      <Check className="size-3" />
                    </div>
                  ) : (
                    <div className="size-5 bg-neutral-800 rounded-full flex items-center justify-center border border-neutral-700 text-neutral-400 text-[10px] font-mono">
                      1
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-xs leading-relaxed transition-all duration-500 ${aiTextState === 'completed' ? 'text-green-300 font-medium' : 'text-neutral-300'}`}>
                    {aiTextState === "optimizing" ? (
                      <span className="flex items-center gap-2 text-neutral-400">
                        <span className="size-3.5 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></span> Rewriting bullet point...
                      </span>
                    ) : typedText}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-neutral-900 flex justify-end gap-2.5">
                {aiTextState === "completed" ? (
                  <button 
                    onClick={handleAiReset}
                    className="text-[11px] px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors font-medium cursor-pointer"
                  >
                    Reset
                  </button>
                ) : (
                  <button 
                    onClick={handleAiOptimize}
                    disabled={aiTextState === "optimizing"}
                    className="text-[11px] px-3.5 py-1.5 rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-black hover:border-transparent transition-all font-semibold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Wand2 className="size-3" /> Optimize with AI
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Live Preview (Spans 1 col) */}
          <div className="group border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.03)] flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-neutral-800/80 rounded-lg text-green-400 border border-neutral-700/50">
                  <Eye className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 font-sans">Live Preview</h3>
              </div>
              <p className="text-sm text-neutral-400 font-sans">
                Observe changes instantly side-by-side. Form editing and layout rendering happen concurrently with no delay.
              </p>
            </div>

            {/* Live Typing Preview Mockup */}
            <div className="bg-neutral-950/80 border border-neutral-800/50 rounded-xl p-4 flex flex-col gap-2.5 relative overflow-hidden h-[130px] justify-center font-sans">
              {/* Scan grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size-[10px_10px] pointer-events-none"></div>
              
              {/* Pulsing indicator */}
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-medium text-neutral-400 tracking-wider uppercase">Live Rendering</span>
              </div>

              {/* Mock Resume Lines */}
              <div className="space-y-2">
                <div className="h-2.5 bg-neutral-700/60 rounded-full w-3/4 animate-pulse"></div>
                <div className="h-2 bg-neutral-800/80 rounded-full w-full"></div>
                <div className="h-2 bg-neutral-800/80 rounded-full w-5/6"></div>
                <div className="h-2 bg-neutral-800/80 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Card 3: ATS Optimization (Spans 1 col) */}
          <div className="group border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.03)] flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-neutral-800/80 rounded-lg text-green-400 border border-neutral-700/50">
                  <FileText className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 font-sans">100% ATS Friendly</h3>
              </div>
              <p className="text-sm text-neutral-400 font-sans">
                Crafted layouts tested to pass automated parser checks, securing your way past filter screens.
              </p>
            </div>

            {/* ATS Scanning Animation */}
            <div className="bg-neutral-950/80 border border-neutral-800/50 rounded-xl p-4.5 relative overflow-hidden h-[130px] flex flex-col justify-between font-sans">
              {/* Scan Laser effect */}
              <div className="absolute left-0 right-0 h-[2px] bg-green-500/60 blur-[1px] shadow-[0_0_8px_#22c55e] animate-[scan_3s_ease-in-out_infinite]"></div>
              
              {/* Scanner Grid */}
              <div className="space-y-1.5 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-neutral-500">Scanning document...</span>
                  <span className="text-[10px] font-mono font-bold text-green-400">98% Match</span>
                </div>
                <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full animate-[progress_3s_ease-in-out_infinite]" style={{ width: "98%" }}></div>
                </div>
              </div>

              {/* Minimalist document visual */}
              <div className="space-y-1.5 opacity-60">
                <div className="h-1 bg-neutral-700 rounded-full w-12"></div>
                <div className="h-1 bg-neutral-800 rounded-full w-24"></div>
                <div className="h-1 bg-neutral-800 rounded-full w-20"></div>
              </div>

              <style>{`
                @keyframes scan {
                  0%, 100% { top: 10%; }
                  50% { top: 85%; }
                }
                @keyframes progress {
                  0%, 100% { width: 10%; }
                  50% { width: 98%; }
                }
              `}</style>
            </div>
          </div>

          {/* Card 4: Pixel-Perfect Customizer (Spans 2 cols) */}
          <div className="md:col-span-2 group border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.03)] overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-neutral-800/80 rounded-lg text-green-400 border border-neutral-700/50">
                  <Palette className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-100 font-sans">Style Customizer</h3>
              </div>
              <p className="text-sm text-neutral-400 max-w-md mb-6 font-sans">
                Adjust themes, sizing, spacing, and typography on the fly. Tailor your resume style to match the target company's culture.
              </p>
            </div>

            {/* Interactive Customizer Panel & Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-950/80 border border-neutral-800/50 rounded-xl p-4.5 font-sans">
              {/* Panel Controls */}
              <div className="flex flex-col gap-3.5 justify-center border-b sm:border-b-0 sm:border-r border-neutral-800/60 pb-3 sm:pb-0 sm:pr-4">
                {/* Theme Selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block mb-1.5">
                    Accent Color
                  </label>
                  <div className="flex gap-2">
                    {Object.keys(colorMap).map((color) => (
                      <button
                        key={color}
                        onClick={() => setAccentColor(color)}
                        className={`size-6 rounded-full border cursor-pointer transition-all flex items-center justify-center ${
                          accentColor === color
                            ? "border-white scale-110"
                            : "border-transparent hover:scale-105"
                        }`}
                        style={{
                          backgroundColor:
                            color === "emerald"
                              ? "#10b981"
                              : color === "sky"
                              ? "#0ea5e9"
                              : color === "violet"
                              ? "#8b5cf6"
                              : "#f43f5e",
                        }}
                      >
                        {accentColor === color && (
                          <Check className="size-3 text-black font-extrabold" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Family Selector */}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 block mb-1.5">
                    Typography Font
                  </label>
                  <div className="flex gap-1.5">
                    {["sans", "serif", "mono"].map((font) => (
                      <button
                        key={font}
                        onClick={() => setFontFamily(font)}
                        className={`text-[10px] px-2.5 py-1 rounded-md border font-medium cursor-pointer transition-colors capitalize ${
                          fontFamily === font
                            ? "bg-neutral-800 text-white border-neutral-700"
                            : "bg-neutral-900/40 text-neutral-400 border-neutral-800 hover:text-neutral-200"
                        }`}
                      >
                        {font}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Live Preview Resume */}
              <div className="flex flex-col justify-center pl-0 sm:pl-2">
                <div className={`border p-3.5 rounded-lg bg-neutral-900/60 shadow-lg transition-all duration-300 ${colorMap[accentColor].border} ${colorMap[accentColor].glow} ${fontMap[fontFamily]}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`size-3 rounded-full ${colorMap[accentColor].bg}`}></div>
                    <div className="flex-1">
                      <div className="h-2 bg-neutral-100 rounded-full w-20 mb-1"></div>
                      <div className="h-1 bg-neutral-500 rounded-full w-28"></div>
                    </div>
                  </div>
                  <div className="border-t border-neutral-800/80 pt-2 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className={`text-[8px] font-bold ${colorMap[accentColor].text}`}>Experience</span>
                      <span className="text-[6px] text-neutral-500">2024 - Present</span>
                    </div>
                    <div className="h-1 bg-neutral-700/60 rounded-full w-full"></div>
                    <div className="h-1 bg-neutral-700/60 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

