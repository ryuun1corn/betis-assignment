import { Outlet } from "react-router-dom";
import { getBoats } from "../utility/api_utils";

import Navbar from "../components/Navbar";
import "../index.css";

const RootLayout = () => {
  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
