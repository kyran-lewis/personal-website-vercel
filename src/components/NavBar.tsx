import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Menu from "../assets/burger-menu.svg";

function NavBar() {
  const URL = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="w-full bg-amber-200">
        <div className=" py-6 px-6 flex items-center justify-between">
          <div className="text-2xl text-gray-800">kyranlewis.co.uk</div>
          {/* <div className="block md:hidden">Expand</div> */}
          <img
            className="block md:hidden cursor-pointer"
            src={Menu}
            width="35"
            onClick={(e) => setOpenMenu(!openMenu)}
          />

          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              <li className={URL.pathname === "/" ? "font-bold" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={URL.pathname === "/experience" ? "font-bold" : ""}>
                <Link to="/experience">Experience</Link>
              </li>
              <li className={URL.pathname === "/portfolio" ? "font-bold" : ""}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className={URL.pathname === "/blog" ? "font-bold" : ""}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={URL.pathname === "/contact" ? "font-bold" : ""}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={` absolute w-full overflow-hidden z-20 ${openMenu ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <div
            className={`transition-all duration-400 ease-out origin-top ${
              openMenu ? "translate-y-0" : "-translate-y-full"
            } bg-amber-100`}
          >
            <ul className="flex-col items-center gap-4">
              <li
                className={
                  (URL.pathname === "/" ? "font-bold " : "") +
                  "border-b-1 border-amber-200 text-center py-2"
                }
                onClick={(e) => setOpenMenu(false)}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  (URL.pathname === "/experience" ? "font-bold " : "") +
                  "border-b-1 border-amber-200 text-center py-2"
                }
                onClick={(e) => setOpenMenu(false)}
              >
                <Link to="/experience">Experience</Link>
              </li>
              <li
                className={
                  (URL.pathname === "/portfolio" ? "font-bold " : "") +
                  "border-b-1 border-amber-200 text-center py-2"
                }
                onClick={(e) => setOpenMenu(false)}
              >
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li
                className={
                  (URL.pathname === "/blog" ? "font-bold " : "") +
                  "border-b-1 border-amber-200 text-center py-2"
                }
                onClick={(e) => setOpenMenu(false)}
              >
                <Link to="/blog">Blog</Link>
              </li>
              <li
                className={
                  (URL.pathname === "/contact" ? "font-bold " : "") +
                  "border-b-1 border-amber-200 text-center py-2"
                }
                onClick={(e) => setOpenMenu(false)}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
