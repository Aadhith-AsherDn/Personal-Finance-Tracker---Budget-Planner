import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Sidebar />

      <div className="ml-64 p-8">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;