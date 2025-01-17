import React from "react";

type ThemeMode = "light" | "dark";
type Justify = "start" | "center";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  themeMode?: ThemeMode;
  justifyTitle?: Justify;
  bgColor?: string;
  textColor?: string;
}

export const Card = ({
  title,
  children,
  className = "",
  themeMode = "dark",
  justifyTitle = "start",
  textColor = "text-neutral-300",
  bgColor,
}: CardProps) => {
  const backgroundClass =
    bgColor ||
    (themeMode === "light" ? "bg-neutral-800/60" : "bg-neutral-800/30");

  const titleAlignment = {
    start: "text-left",
    center: "text-center",
  };

  return (
    <div className={`relative p-4 rounded-lg shadow-md ${className}`}>
      <div className={`absolute inset-0 ${backgroundClass} rounded-lg`}></div>
      <div className="relative z-10">
        {title && (
          <h2
            className={`text-lg font-semibold ${textColor} mb-2 ${titleAlignment[justifyTitle]}`}
          >
            {title}
          </h2>
        )}
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};
