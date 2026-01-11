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
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-green-600 bg-linear-to-br from-green-50 to-green-100 ring-green-500 hover:ring transition-all duration-300 ease-in-out px-3 py-2 rounded-lg"
      >
        <Layout className="size-4" />
        <span className="max-sm:hidden">Template</span>
      </button>
      {isOpen && (
        <div className="absolute flex flex-wrap lg:block top-full w-xs p-3 mt-2 space-y-3 z-10 bg-green-50 rounded-md border border-green-500 shadow-sm">
          {templates.map((temp) => (
            <div
              key={temp.id}
              onClick={() => {
                onChange(temp.id);
                setIsOpen(false);
              }}
              className={`ml-3 lg:ml-0 relative p-3 border rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
                selectedTempelate === temp.id
                  ? "border-green-500 bg-green-200"
                  : "border-green-200 hover:border-green-400 hover:bg-green-200/30"
              }`}
            >
              {selectedTempelate === temp.id && (
                <div className="absolute top-2 right-2">
                  <div className="hidden lg:flex size-5 bg-green-500 rounded-full items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <h4 className="font-medium text-green-800">{temp.name}</h4>
                <div className="hidden lg:block mt-2 p-2 bg-green-100 rounded text-xs text-green-500 italic">{temp.preview}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TempelateSelector;
