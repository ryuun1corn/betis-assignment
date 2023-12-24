import "../index.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    ["View", "/boats"],
    ["Add", "/add"],
  ];

  return (
    <div className="flex justify-between h-full">
      <Link to="/" className="align-top">
        <img src="./src/assets/boat-icon.svg" className="w-full" />
      </Link>
      <nav className="flex items-center gap-3 mx-3">
        {links.map(([title, url], index) => (
          <NavLink
            to={url}
            key={index}
            className="tracking-wider text-md text-white1 bg-blue1 border-white1 border-[1px] rounded-2xl px-5 py-1 font-medium transition ease-in-out hover:bg-white hover:text-blue1 sm:text-2xl md:text-3xl sm:mx-5 sm:px-6"
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
