import Modern from "./templates/ModernTemplate";
import Classic from "./templates/ClassicTemplate";
import MinimalImage from "./templates/MinimalImageTemplate";
import Minimal from "./templates/MinimalTemplate";
import Premium from "./templates/PremiumTemplate";

const Preview = ({data, template, accentColor, classes = ""}) => {

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
      default: 
        return <Classic data={data} accentColor={accentColor} />
    }
  }

  return (
    <div className='w-full bg-gray-100'>
        <div id='resume-preview' className={"border border-gray-200 print:shadow-none print:border-none" + classes}>
          {renderTempelate()}
        </div>

        <style jsx>
          {
            `
              @page {
                size: letter;
                margin: 0;
              }

              @media print {
                html, body {
                  width: 8.5in;
                  min-height: 11in;
                }

                body * {
                  visibility: hidden;
                }

                #resume-preview, #resume-preview *  {
                  visibility: visible;
                }

                #resume-preview {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: auto;
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

export default Preview