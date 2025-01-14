import React, { FC } from "react";

type Align = "left" | "center" | "right";
type ThemeMode = "light" | "dark";
type VisualEffect = "blur" | "noBlur";

type ThemeClasses = {
  light: "bg-neutral-800/60";
  dark: "bg-neutral-800/30";
};

type VisualEffectClasses = {
  blur: "backdrop-blur-3xl";
  noBlur: "";
};

interface CardProps {
  title: string;
  children: React.ReactNode;
  alignTitle?: Align;
  alignContent?: Align;
  className?: string;
  themeMode?: ThemeMode;
  visualEffect?: VisualEffect;
}

export const Card: FC<CardProps> = ({
  title,
  children,
  alignTitle = "left",
  alignContent = "left",
  className = "",
  themeMode = "dark",
  visualEffect = "blur",
}) => {
  const alignmentClasses = {
    title: `text-${alignTitle}`,
    content: `items-${alignContent}`,
  };

  const themeClasses: ThemeClasses[ThemeMode] =
    themeMode === "light" ? "bg-neutral-800/60" : "bg-neutral-800/30";
  const visualEffectClasses: VisualEffectClasses[VisualEffect] =
    visualEffect === "blur" ? "backdrop-blur-3xl" : "";

  return (
    <div className={`relative p-4 rounded-lg shadow-md ${className}`}>
      <div
        className={`absolute inset-0 ${themeClasses} ${visualEffectClasses} rounded-lg`}
      ></div>
      <div className="relative z-10">
        <h2
          className={`text-lg font-semibold text-neutral-300 mb-2 ${alignmentClasses.title}`}
        >
          {title}
        </h2>
        <div className={`flex flex-col ${alignmentClasses.content}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
