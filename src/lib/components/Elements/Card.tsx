import React, { FC } from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  alignTitle?: "left" | "center" | "right";
  alignContent?: "left" | "center" | "right";
  className?: string;
}

export const Card: FC<CardProps> = ({
  title,
  children,
  alignTitle = "left",
  alignContent = "left",
  className = "",
}) => {
  const alignmentClasses = {
    title: `text-${alignTitle}`,
    content: `items-${alignContent}`,
  };

  return (
    <div className={`p-4 bg-neutral-800 rounded-lg shadow-md ${className}`}>
      <h2
        className={`text-lg font-semibold text-neutral-300 mb-2 ${alignmentClasses.title}`}
      >
        {title}
      </h2>
      <div className={`flex flex-col ${alignmentClasses.content}`}>
        {children}
      </div>
    </div>
  );
};
