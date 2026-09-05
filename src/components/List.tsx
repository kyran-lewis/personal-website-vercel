import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

interface Props {
  items: string[];
}

function List({ items }: Props) {
  return (
    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 pl-1 leading-relaxed">
      {items.map((item, index) =>
        item.includes("**") ? (
          <li key={index}>
            <strong>{item.split("**")[1]}</strong>
            {item.split("**")[2]}
          </li>
        ) : (
          <li key={index}>{item}</li>
        ),
      )}
    </ul>
  );
}

export default List;
