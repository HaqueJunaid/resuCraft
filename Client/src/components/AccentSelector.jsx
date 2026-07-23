import { Check, PaintBucket } from "lucide-react";
import { useState } from "react";

const AccentSelector = ({ selectedColor, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colours = [
    { code: "#3B82F6", title: "Blue" },
    { code: "#6366F1", title: "Indigo" },
    { code: "#8B5CF6", title: "Purple" },
    { code: "#10B981", title: "Green" },
    { code: "#EF4444", title: "Red" },
    { code: "#F97316", title: "Orange" },
    { code: "#14B8A6", title: "Teal" },
    { code: "#EC4899", title: "Pink" },
    { code: "#6B7280", title: "Gray" },
    { code: "#1F2937", title: "Black" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/60 hover:bg-neutral-800/80 border border-green-500/30 hover:border-green-500/60 px-4 py-2.5 rounded-xl transition duration-300 cursor-pointer active:scale-[0.98]"
      >
        <PaintBucket className="size-4 text-violet-400" />
        <span>Accent</span>
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-9" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-full left-0 w-60 p-3.5 mt-2 z-10 bg-neutral-950/95 backdrop-blur-xl rounded-2xl border border-neutral-800 shadow-2xl grid grid-cols-5 gap-3">
            {colours.map((color) => (
              <div
                onClick={() => {
                  onChange(color.code);
                  setIsOpen(false);
                }}
                key={color.code}
                className="cursor-pointer flex items-center justify-center relative group"
                title={color.title}
              >
                <div
                  className="w-8 h-8 rounded-lg hover:scale-105 border border-neutral-900 transition-transform duration-200 flex items-center justify-center relative shadow-sm"
                  style={{ background: color.code }}
                >
                  {selectedColor.trim().toLowerCase() === color.code.trim().toLowerCase() && (
                    <div className="absolute inset-0 bg-black/15 flex items-center justify-center rounded-lg">
                      <Check className="size-4 text-white stroke-[3.5]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AccentSelector;
