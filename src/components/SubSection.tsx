import { Children, useState, type ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  title: string;
  summary: string;
  children?: ReactNode;
  focus?: string;
}

function Spotlight({ title, summary, children, focus }: Props) {
  return (
    <div className="border-l-2 border-amber-200 pl-4 md:pl-6 space-y-3">
      <div>
        <h4 className="text-xl font-black text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{summary}</p>
      </div>
      {children && (
        <>
          <div className="flex flex-col pt-2">{children}</div>{" "}
        </>
      )}
      {focus && (
        <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
          Focus: {focus}
        </p>
      )}
    </div>
  );
}

export default Spotlight;
