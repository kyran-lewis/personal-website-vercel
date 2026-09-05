interface Props {
  icon: string;
  title: string;
  subTitle?: string;
  description?: string;
  action?: string;
  link?: string;
}

function SmallCard({
  icon,
  title,
  subTitle,
  description,
  action,
  link,
}: Props) {
  return (
    <a
      href={link}
      /* 🛠️ Added 'h-full flex flex-col' to create a uniform height structure across the row */
      className="h-full flex flex-col justify-center items-center bg-amber-50 border border-amber-100 hover:border-amber-500 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md mr-4 group"
    >
      {/* Icon Container */}
      <div className="text-amber-500 text-3xl mb-2 flex-shrink-0">{icon}</div>

      {/* 🛠️ Text Content Wrapper - Keeps everything aligned together at the top */}
      <div className="flex flex-col items-center text-center w-full">
        <h3
          className={`text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors`}
        >
          {title}
        </h3>

        {subTitle && (
          <h4 className="text-gray-600 text-sm mt-0.5">{subTitle}</h4>
        )}

        {description && (
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* 🛠️ Action Link Button - 'mt-auto' forces it to stick flawlessly to the bottom line */}
      {action && (
        <span className="mt-auto pt-4 text-xs font-bold text-amber-600 inline-flex items-center gap-1">
          {action}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      )}
    </a>
  );
}

export default SmallCard;
