import { type ReactNode } from "react";
import Logo from "../components/Logo";

interface Props {
  logo: string;
  logoAlt: string;
  institution: string;
  degree: string;
  summary: string;
  grade: string;
}

function EducationEntry({
  logo,
  logoAlt,
  institution,
  degree,
  summary,
  grade,
}: Props) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition hover:shadow-md relative">
      <Logo image={logo} alt={logoAlt} />

      {/* Main Header Area with wide padding constraint */}
      <div className="border-b border-gray-100 pb-4 mb-6 pr-24 md:pr-32">
        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
          <span>🎓</span> Education
        </h2>
      </div>

      {/* Expanded Content Area */}
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900">
            {institution}
          </h3>
          <p className="text-md font-semibold text-gray-700 mt-0.5">{degree}</p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
          {summary}
        </p>

        <div className="pt-2">
          {/* Styled Badge with clean Tailwind amber values */}
          <span className="text-sm font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5 shadow-sm">
            🏆 {grade}
          </span>
        </div>
      </div>
    </section>
  );
}

export default EducationEntry;
