import { type ReactNode } from "react";
import Logo from "../components/Logo";

interface Props {
  company: string;
  note?: string;
  role: string;
  children?: ReactNode;
}

function PortfolioEntry({ name, note, children }: Props) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
      <div className="border-b border-gray-100 pb-4 mb-8 pr-24 md:pr-32">
        <h2 className="text-2xl font-black text-gray-900">
          {name}{" "}
          {note && (
            <span className="text-sm font-normal text-gray-400 block sm:inline">
              ({note})
            </span>
          )}
        </h2>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span>🚀</span> Key Achievements
      </h3>
      {children}
    </section>
  );
}

export default PortfolioEntry;
