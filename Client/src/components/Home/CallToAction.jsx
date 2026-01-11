import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigator = useNavigate();
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <div className="w-[90%] mx-auto lg:w-full pb-34 lg:pb-46 lg:pt-36 bg-black">
        <div className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-linear-to-b from-green-500/50 to-black rounded-2xl p-10 text-white">
          <p className="px-6 py-2 rounded-full text-xs lg:text-sm border border-neutral-100 bg-linear-to-r from-white to-white bg-clip-text text-transparent">
            Great Precision
          </p>
          <h1 className="text-3xl md:text-5xl md:leading-15 font-medium max-w-2xl mt-5">
            First choice of every professional to 
            <span className="ml-3 bg-linear-to-r from-green-200 to-green-500 bg-clip-text text-transparent">
              elevating their careers with AI
            </span>
          </h1>
          <p className="text-white text-xs lg:text-sm mt-4 lg:mt-2">
            Gain immediate access to our expertly crafted professional templates.
          </p>
          <button onClick={() => navigator("/app")} className="px-12 py-2.5 mt-6 rounded-full text-sm border border-green-500 active:scale-95 transition-all bg-linear-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
