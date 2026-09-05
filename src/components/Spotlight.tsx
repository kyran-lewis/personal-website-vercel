import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  title: string;
  description: string;
}

function Spotlight({ title, description }: Props) {
  return (
    <div className="bg-slate-100 p-5 rounded-xl border border-gray-100 space-y-2 mb-4">
      <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600">
        {title}
      </h5>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default Spotlight;
