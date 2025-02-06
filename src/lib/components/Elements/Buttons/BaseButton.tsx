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
  icon = "",
  label = "",
  children,
}: BaseButtonProps) => {
  const resolvedHoverEffect = animationHover
    ? {
        boxShadow: glowEffect ? "0px 0px 15px rgba(255, 255, 255, 0.8)" : {},
        ...hoverEffect,
      }
    : {};

  const resolvedTapEffect = animationOnClick ? tapEffect : {};
  const resolvedTransition = transition ? transition : {};

  return (
    <motion.button
      onClick={handleOnClick}
      className={`flex items-center justify-center rounded-full text-white shadow-lg px-6 py-3 m-2  ${className}`}
      whileHover={resolvedHoverEffect}
      whileTap={resolvedTapEffect}
      transition={resolvedTransition}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
      {children}
    </motion.button>
  );
};
