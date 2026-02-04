import Logo from "../components/Logo";
import { useRef, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const OtpVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line react-hooks/immutability
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
  }

  return (
    <div className="w-full relative h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <Logo />
        <div className="text-neutral-100 mt-6 flex flex-col items-center">
          <h2 className="text-4xl text-green-500 font-medium">Verify Account</h2>
          <p className="text-sm text-neutral-300/90 mt-2">
            Enter the 6-digit code sent to your email address
          </p>
          <input
            ref={emailRef}
            type="text"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-green-500 mt-7"
          />
          <input
            ref={otpRef}
            type="text"
            placeholder="Enter 6-digit code"
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
          />
          <button disabled={isLoading} onClick={handleVerify} className="w-full px-4 py-2 rounded-lg bg-green-500 text-neutral-100 hover:bg-green-600 transition-colors mt-4">
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>
      <div className="w-72 h-72 rounded-full blur-[15rem] bg-green-500 absolute left-0 bottom-0"></div>
    </div>
  );
};

export default OtpVerification;