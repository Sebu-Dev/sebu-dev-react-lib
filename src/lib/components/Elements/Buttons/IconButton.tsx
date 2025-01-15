import { motion } from "framer-motion";
import type { BaseButtonProps } from "./BaseButton";

interface IconButtonProps extends Omit<BaseButtonProps, "label"> {
  icon: React.ReactNode;
  size?: string;
  textColor?: string;
}

export const IconButton = ({
  icon,
  handleOnClick,
  className = "",
  hoverEffect = { scale: 1.1 },
  tapEffect = { scale: 0.9 },
  transition = { type: "spring", stiffness: 300 },
  size = "text-4xl",
  textColor = "text-cyan-500",
}: IconButtonProps) => {
  console.log(textColor);
  return (
    <motion.div
      onClick={handleOnClick}
      className={`inline-flex items-center justify-center cursor-pointer  ${size} ${textColor} ${className}`}
      whileHover={hoverEffect}
      whileTap={tapEffect}
      transition={transition}
    >
      {icon}
    </motion.div>
  );
};
