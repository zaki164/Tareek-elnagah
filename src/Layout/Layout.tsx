import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../Components";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
