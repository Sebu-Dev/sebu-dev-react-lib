// sebu-dev-react-lib/src/components/BaseButton.tsx (angenommen)
import { motion, TargetAndTransition, Transition } from "framer-motion";
import React from "react";

export interface BaseButtonProps {
  handleOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  animationHover?: boolean;
  animationOnClick?: boolean;
  hoverEffect?: TargetAndTransition;
  glowEffect?: boolean;
  tapEffect?: TargetAndTransition;
  transition?: Transition;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  label?: string;
  disabled?: boolean; // Neue Prop
  type?: "button" | "submit" | "reset"; // HTML-Button-Typen
}

const defaultHoverEffect: TargetAndTransition = { scale: 1.1 };
const defaultTapEffect: TargetAndTransition = { scale: 0.95 };
const defaultTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

export const BaseButton = ({
  handleOnClick,
  className = "",
  animationHover = false,
  animationOnClick = false,
  hoverEffect = defaultHoverEffect,
  glowEffect = false,
  tapEffect = defaultTapEffect,
  transition = defaultTransition,
  icon,
  label,
  children,
  disabled = false, // Default-Wert
  type = "button", // Default-Wert
}: BaseButtonProps) => {
  const resolvedHoverEffect = animationHover
    ? {
        boxShadow: glowEffect ? "0px 0px 15px rgba(255, 255, 255, 0.8)" : undefined,
        ...hoverEffect,
      }
    : undefined;

  const resolvedTapEffect = animationOnClick ? tapEffect : undefined;
  const resolvedTransition = transition || defaultTransition;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!disabled && handleOnClick) {
      handleOnClick(e);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`flex items-center justify-center rounded-full text-white shadow-lg px-6 py-3 m-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      whileHover={disabled ? undefined : resolvedHoverEffect} // Keine Animation bei disabled
      whileTap={disabled ? undefined : resolvedTapEffect} // Keine Animation bei disabled
      transition={resolvedTransition}
      disabled={disabled} // Native HTML disabled-Attribut
      type={type} // HTML-Typ
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
      {children}
    </motion.button>
  );
};