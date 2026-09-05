import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function NavBar() {
  const URL = useLocation();

  return (
    <>
      <nav className="w-full bg-amber-200">
        <div className="container py-6 flex items-center justify-between">
          <div className="text-2xl text-gray-800">kyranlewis.co.uk</div>
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
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
