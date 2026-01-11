import { Check, PaintBucket } from "lucide-react";
import { useState } from "react";

const AccentSelector = ({ selectedColor, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colours = [
    {
      code: "#3B82F6",
      title: "Blue"
    },
    {
      code: "#6366F1",
      title: "Indigo"
    },
    {
      code: "#8B5CF6",
      title: "Purple"
    },
    {
      code: "#10B981",
      title: "Green"
    },
    {
      code: "#EF4444",
      title: "Red"
    },
    {
      code: "#F97316",
      title: "Orange"
    },
    {
      code: "#14B8A6",
      title: "Teal"
    },
    {
      code: "#EC4899",
      title: "Pink"
    },
    {
      code: "#6B7280",
      title: "Gray"
    },
    {
      code: "#1F2937 ",
      title: "Black"
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-violet-600 bg-linear-to-br from-violet-50 to-violet-100 ring-violet-500 hover:ring transition-all duration-300 ease-in-out px-3 py-2 rounded-lg"
      >
        <PaintBucket className="size-4" />
        <span className="max-sm:hidden">Accent</span>
      </button>
      {isOpen && (
        <div className="absolute justify-center grid grid-cols-3 lg:grid-cols-4 top-full w-xs py-5 lg:py-3 px-5 lg:px-2 mt-2 space-y-3 z-10 bg-green-50 rounded-md border border-green-500 shadow-sm">
          {colours.map((color) => (
            <div onClick={() => {onChange(color.code); setIsOpen(false)}} key={color.code} className="cursor-pointer flex lg:items-center flex-col">
                <div className={`relative size-15 rounded-full hover:scale:90 transition-all duration-300 ease-in-out`} style={{background: color.code}}>
                    {selectedColor === color.code && (
                    <div className="w-full h-full flex items-center justify-center">
                        <Check className="size-5 text-white"/>
                    </div>
                )}
                </div>
                <span className="text-neutral-600 text-xs mt-2">{color.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccentSelector;
