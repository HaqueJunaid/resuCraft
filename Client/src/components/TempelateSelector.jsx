import { Check, Layout } from "lucide-react";
import React, { useState } from "react";

const TempelateSelector = ({ selectedTempelate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, traditional resume format with clear sections and professional typography",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Sleek design with strategic use of color and modern font choices",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra clean design that puts your content front and center",
    },
    {
      id: "premium",
      name: "Premium",
      preview:
        "Great spacings and proper font formating for rich and premium looks",
    },
    {
      id: "creative",
      name: "Creative",
      preview: "A dynamic 2-column warm stone theme with modern timeline layout",
    },
    {
      id: "tech",
      name: "Tech / Dev",
      preview: "A software developer format with compact monospace tags",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/60 hover:bg-neutral-800/80 border border-green-500/30 hover:border-green-500/70 px-4 py-2.5 rounded-xl transition duration-300 cursor-pointer active:scale-[0.98]"
      >
        <Layout className="size-4 text-green-400" />
        <span>Template</span>
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-9" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-full left-0 w-80 max-h-80 overflow-y-auto p-4 mt-2 space-y-3 z-10 bg-neutral-950/95 backdrop-blur-xl rounded-2xl border border-neutral-800 shadow-2xl scrollbar-thin">
            {templates.map((temp) => (
              <div
                key={temp.id}
                onClick={() => {
                  onChange(temp.id);
                  setIsOpen(false);
                }}
                className={`relative p-3 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${
                  selectedTempelate === temp.id
                    ? "border-green-500/50 bg-green-500/5 text-green-400"
                    : "border-neutral-900 bg-neutral-900/20 hover:border-neutral-800 text-neutral-300 hover:text-white"
                }`}
              >
                {selectedTempelate === temp.id && (
                  <div className="absolute top-3 right-3">
                    <div className="flex size-4.5 bg-green-500 rounded-full items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-neutral-950 stroke-3" />
                    </div>
                  </div>
                )}

                <div className="space-y-1 pr-6">
                  <h4 className="font-semibold text-sm">{temp.name}</h4>
                  <div className="mt-1.5 p-2 bg-neutral-950/80 border border-neutral-900 rounded-lg text-[10px] text-neutral-400 leading-relaxed">
                    {temp.preview}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TempelateSelector;
