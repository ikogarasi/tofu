import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const location = useLocation();
  const [homePageActive, setHomePageActive] = useState(Boolean);

  useEffect(() => {
    if (location.pathname == "/") {
      setHomePageActive(true);
      return;
    }
    setHomePageActive(false);
  }, [location]);
  return (
    <>
      {!homePageActive && <Header homePageActive={homePageActive} pathname={location.pathname} />}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
