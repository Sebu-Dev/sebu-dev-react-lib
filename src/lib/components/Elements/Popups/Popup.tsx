import type { ReactNode } from "react";

interface PopupProps {
  children: ReactNode;
  bgColor?: string;
  zPositionBlur?: string;
  zPositionPopup?: string;
  className?: string;
  bgOpacity?: string;
  backdropBlur?: string;
}

export const Popup = ({
  children,
  bgColor = "bg-neutral-800",
  bgOpacity = "bg-opacity-10",
  zPositionBlur = "z-10",
  zPositionPopup = "z-20",
  backdropBlur = " backdrop-blur-sm",
  className = " ",
}: PopupProps) => {
  return (
    <div className="absolute w-full h-full top-0 p-0 left-0 flex justify-center items-center">
      <div
        className={`absolute inset-0 bg-black ${bgOpacity} ${backdropBlur}  ${zPositionBlur}`}
      ></div>
      <div className={`${zPositionPopup} ${bgColor} ${className}`}>
        {children}
      </div>
      <div className="absolute"></div>
    </div>
  );
};
