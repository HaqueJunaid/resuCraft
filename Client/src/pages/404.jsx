import { Link } from "react-router-dom"
import Logo from "../components/Logo"

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-black bg-center bg-cover bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-linear-bg.svg)]">
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
            <div className="absolute left-5 top-5 md:left-10 md:top-10">
                <Logo />
            </div>
            <h1 className="text-4xl md:text-[12rem] font-bold bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                404 <span className="text-green-500 relative -left-7 font-medium text-2xl">Not Found!</span>
            </h1>
            <div className="h-px w-80 rounded bg-linear-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
            <p className="md:text-xl text-gray-300 max-w-lg text-center">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to={"/"} className="group flex items-center gap-1 bg-green-500 hover:bg-green-600 px-7 py-2.5 text-neutral-50 rounded-full mt-10 font-medium active:scale-95 transition-all">
                Back to Home
                <svg className="group-hover:translate-x-0.5 transition " width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
        </div>
    </div>
  )
}

export default NotFound