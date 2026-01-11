import { Outlet } from "react-router-dom";
import LayoutNavbar from "../components/LayoutNavbar";

const Layout = () => {
  return (
    <div className="h-screen w-full">
    <div className="w-72 h-72 rounded-full blur-[15rem] bg-green-500/60 absolute left-0 top-0"></div>
      <LayoutNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
