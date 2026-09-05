import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
}

function CategoryFilter({ categories, activeFilter, setActiveFilter }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            activeFilter === category
              ? "bg-amber-500 text-white shadow-sm"
              : "bg-white border border-gray-200 text-gray-600 hover:border-amber-400 hover:text-amber-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
