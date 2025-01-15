import {
  motion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

interface ButtonCyanProps {
  handleOnClick: () => void;
  label: string;
  className?: string;
  hoverEffect?: TargetAndTransition;
  tapEffect?: TargetAndTransition;
  transition?: Transition;
  fixedStyles?: boolean;
}

export const ButtonCyan = ({
  handleOnClick,
  label,
  className = "",
  hoverEffect,
  tapEffect,
  transition,
  fixedStyles = true,
}: ButtonCyanProps) => {
  const defaultHoverEffect: TargetAndTransition = {
    scale: 1.1,
    backgroundColor: "#38bdf8",
  };

  const defaultTapEffect: TargetAndTransition = {
    scale: 0.9,
  };

  const defaultTransition: Transition = {
    type: "spring",
    stiffness: 300,
  };

  const baseClassNames = fixedStyles
    ? "px-6 py-3 bg-cyan-500 text-white rounded-full shadow-lg"
    : "";

  return (
    <motion.button
      onClick={handleOnClick}
      className={`${baseClassNames} ${className}`}
      whileHover={hoverEffect || defaultHoverEffect}
      whileTap={tapEffect || defaultTapEffect}
      transition={transition || defaultTransition}
    >
      {label}
    </motion.button>
  );
};
