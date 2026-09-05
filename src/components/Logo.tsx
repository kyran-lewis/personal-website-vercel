import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  image: string;
  alt: string;
}

function Badge({ image, alt }: Props) {
  return (
    <div className="absolute top-6 right-6 md:top-8 md:right-8">
      <img
        className="h-16 w-16 md:h-20 md:w-20 object-contain bg-white p-2 rounded-2xl border border-gray-200 shadow-sm"
        src={image}
        alt={alt}
      />
    </div>
  );
}

export default Badge;
