import { useRef, useState, useEffect } from "react";
import Modern from "./templates/ModernTemplate";
import Classic from "./templates/ClassicTemplate";
import MinimalImage from "./templates/MinimalImageTemplate";
import Minimal from "./templates/MinimalTemplate";
import Premium from "./templates/PremiumTemplate";
import Creative from "./templates/CreativeTemplate";
import Tech from "./templates/TechTemplate";

const Preview = ({data, template, accentColor, classes = ""}) => {
  const containerRef = useRef(null);
  const previewRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState("auto");

  const updateScale = () => {
    if (containerRef.current && previewRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const previewHeight = previewRef.current.offsetHeight;
      
      // Calculate scale factor relative to A4 width on screen (794px)
      const scaleFactor = containerWidth / 794;
      
      // Let's cap the scale factor at 1.0 to avoid making it larger than real A4 size
      const finalScale = Math.min(1, scaleFactor);
      
      setScale(finalScale);
      setScaledHeight(`${previewHeight * finalScale}px`);
    }
  };

  useEffect(() => {
    // Initial update
    updateScale();

    // Listen to window resize
    window.addEventListener("resize", updateScale);

    // Watch for size changes of the preview contents (due to inputs changing)
    let resizeObserver;
    if (window.ResizeObserver && previewRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateScale();
      });
      resizeObserver.observe(previewRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateScale);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [data, template]);

  const renderTempelate = () => {
    switch (template) {
      case "modern":
        return <Modern data={data} accentColor={accentColor} />
      case "minimal":
        return <Minimal data={data} accentColor={accentColor} />
      case "premium":
        return <Premium data={data} accentColor={accentColor} />
      case "minimal-image":
        return <MinimalImage data={data} accentColor={accentColor} />
      case "creative":
        return <Creative data={data} accentColor={accentColor} />
      case "tech":
        return <Tech data={data} accentColor={accentColor} />
      default: 
        return <Classic data={data} accentColor={accentColor} />
    }
  }

  return (
    <div 
      ref={containerRef} 
      className='preview-container w-full bg-gray-900/10 dark:bg-neutral-900/10 flex justify-center items-start overflow-hidden pt-0 pb-4 rounded-xl'
      style={{ height: scaledHeight }}
    >
        <div 
          ref={previewRef}
          id='resume-preview' 
          className={"border border-gray-200 shadow-md rounded-xl overflow-hidden print:shadow-none print:border-none origin-top transition-transform duration-100 flex-none " + classes}
          style={{
            width: "794px",
            minHeight: "1123px",
            transform: `scale(${scale})`,
            backgroundColor: "white"
          }}
        >
          {renderTempelate()}
        </div>

        <style jsx>
          {
            `
              /* Force the inner template to stretch and fill the A4 min-height */
              #resume-preview > div {
                min-height: inherit !important;
                width: 100% !important;
                max-width: 100% !important;
              }

              @page {
                size: letter;
                margin: 0;
              }

              @media print {
                html, body {
                  width: 8.5in;
                  min-height: 11in;
                  background: white !important;
                }

                /* Ensure the preview columns/wrappers are displayed and visible */
                .flex-3,
                .preview-container {
                  display: block !important;
                  visibility: visible !important;
                  height: auto !important;
                  padding: 0 !important;
                  background: none !important;
                  overflow: visible !important;
                }

                body * {
                  visibility: hidden;
                }

                #resume-preview, #resume-preview *  {
                  visibility: visible;
                }

                #resume-preview {
                  position: absolute !important;
                  left: 0 !important;
                  top: 0 !important;
                  width: 100% !important;
                  min-height: 0 !important;
                  height: auto !important;
                  transform: none !important;
                  margin: 0;
                  padding: 0;
                  box-shadow: none !important;
                  border: none !important;
                }
              }
            `
          }
        </style>
    </div>
  )
}

export default Preview;