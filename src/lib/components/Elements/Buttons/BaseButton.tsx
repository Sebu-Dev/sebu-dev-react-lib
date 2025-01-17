import { motion, TargetAndTransition, Transition } from "framer-motion";
import React from "react";

export interface BaseButtonProps {
  handleOnClick: () => void;
  className?: string;
  bgColor?: string;
  textColor?: string;
  animationHover?: boolean;
  animationOnClick?: boolean;
  hoverEffect?: TargetAndTransition;
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
  tapEffect = defaultTapEffect,
  transition = defaultTransition,
  icon,
  bgColor,
  textColor,
  label,
  children,
}: BaseButtonProps) => {
  const resolvedHoverEffect = animationHover ? hoverEffect : undefined;
  const resolvedTapEffect = animationOnClick ? tapEffect : undefined;
  const resolvedTransition = transition ? transition : undefined;

  return (
    <motion.button
      onClick={handleOnClick}
      className={`flex items-center justify-center rounded-full shadow-lg px-6 py-3 m-2 ${className} ${bgColor} ${textColor}`}
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
