import { Outlet } from "react-router-dom";
// import { SideBar } from "../widgets/SideBar";

const Layout = () => {
  return (
    <div className="flex flex-row" id="layout">
      {/* <SideBar /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
