import {
  motion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

export interface BaseButtonProps {
  handleOnClick: () => void;
  label?: string;
  className?: string;
  hoverEffect?: TargetAndTransition;
  tapEffect?: TargetAndTransition;
  transition?: Transition;
  icon?: React.ReactNode;
}

export const BaseButton = ({
  handleOnClick,
  label,
  className = "",
  hoverEffect = { scale: 1.1 },
  tapEffect = { scale: 0.9 },
  transition = { type: "spring", stiffness: 300 },
  icon,
}: BaseButtonProps) => (
  <motion.button
    onClick={handleOnClick}
    className={`flex items-center justify-center rounded-full shadow-lg px-6 py-3 m-2 ${className}`}
    whileHover={hoverEffect}
    whileTap={tapEffect}
    transition={transition}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </motion.button>
);
