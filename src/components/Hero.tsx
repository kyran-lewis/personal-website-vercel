import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Kyran from "../assets/kyran.jpeg";

function Hero() {
  return (
    <>
      <img
        src={Kyran}
        className="w-48 aspect-square object-cover rounded-full mt-10 border-4 border-black"
      />
      <div className="w-full text-center my-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
          Hi, I'm Kyran!
        </h1>
        <p className="max-w-3xl text-xl md:text-2xl text-gray-600 leading-relaxed mx-auto">
          A Full-Stack Developer with 3.5 years of industry experience and a
          <span className="font-semibold text-gray-900">
            {" "}
            test driven mindset
          </span>
          . I build robust web applications where quality and scalability aren't
          afterthoughts.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/experience"
            className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition active:scale-[0.98] text-center"
          >
            View My Experience
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-amber-50 border border-amber-100 text-gray-700 hover:border-amber-500 hover:text-amber-700 font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition active:scale-[0.98] text-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
