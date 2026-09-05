import { useState, type ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  number: string;
  category: string;
  children?: ReactNode;
}

function TimelineEntry({ number, category, children }: Props) {
  return (
    <div className="relative space-y-4">
      <div className="absolute w-3 h-3 bg-amber-400 rounded-full -left-[23px] md:-left-[31px] top-1.5 border border-white" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h4 className="text-lg font-black text-gray-900">Release v{number}</h4>
        <span className="self-start sm:self-auto text-xs font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
          {category}
        </span>
      </div>
      {children}
    </div>
  );
}

export default TimelineEntry;
