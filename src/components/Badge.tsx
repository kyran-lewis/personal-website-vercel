import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  width?: number;
  height?: number;
}

function Badge({ name, image, width, height }: Props) {
  return (
    <div className="flex items-center w-72 bg-amber-50 border border-amber-100 hover:border-amber-500 p-4 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md mr-4 mb-4">
      <img
        src={image}
        className={`${width ? "w-" + width : "w-10"} ${height ? "h-" + height : "h-10"} object-cover mr-auto`}
      />
      <h2 className="text-2xl">{name}</h2>
    </div>
  );
}

export default Badge;
