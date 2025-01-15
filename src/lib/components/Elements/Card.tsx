import React from "react";

type ThemeMode = "light" | "dark";
type VisualEffect = "blur" | "noBlur";
type Justify = "start" | "center";

type ThemeClasses = {
  light: "bg-neutral-800/60";
  dark: "bg-neutral-800/30";
};

type VisualEffectClasses = {
  blur: "backdrop-blur-3xl";
  noBlur: "";
};

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  themeMode?: ThemeMode;
  visualEffect?: VisualEffect;
  justifyTitle?: Justify; // Neues Prop für die Ausrichtung des Titels
}

export const Card = ({
  title,
  children,
  className = "",
  themeMode = "dark",
  visualEffect = "blur",
  justifyTitle = "start",
}: CardProps) => {
  const themeClasses: ThemeClasses[ThemeMode] =
    themeMode === "light" ? "bg-neutral-800/60" : "bg-neutral-800/30";
  const visualEffectClasses: VisualEffectClasses[VisualEffect] =
    visualEffect === "blur" ? "backdrop-blur-3xl" : "";

  const titleAlignment = {
    start: "text-left",
    center: "text-center",
  };

  return (
    <div className={`relative p-4 rounded-lg shadow-md ${className}`}>
      <div
        className={`absolute inset-0 ${themeClasses} ${visualEffectClasses} rounded-lg`}
      ></div>
      <div className="relative z-10">
        {title && (
          <h2
            className={`text-lg font-semibold text-neutral-300 mb-2 ${titleAlignment[justifyTitle]}`}
          >
            {title}
          </h2>
        )}
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};
