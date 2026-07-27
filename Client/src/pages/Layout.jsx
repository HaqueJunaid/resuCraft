import { Outlet } from "react-router-dom";
import LayoutNavbar from "../components/LayoutNavbar";

const Layout = () => {
  return (
    <div className="h-screen w-full">
      <div className="size-96 rounded-full blur-[16rem] bg-green-500/30 absolute -left-20 -top-20 -z-10 pointer-events-none"></div>
      <LayoutNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
