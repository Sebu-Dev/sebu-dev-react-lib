import { motion } from "framer-motion";
import type { BaseButtonProps } from "./BaseButton";

interface IconButtonProps extends Omit<BaseButtonProps, "label"> {
  icon: React.ReactNode;
  size?: string;
  textColor?: string;
}

export const IconButton = ({
  icon,
  size = "text-4xl",
  textColor = "text-cyan-500",
  ...props
}: IconButtonProps) => {
  const customHoverEffect = {
    ...props.hoverEffect,
    boxShadow: props.glowEffect
      ? "0px 0px 15px rgba(0, 255, 255, 0.8)"
      : undefined,
  };

  return (
    <motion.div
      onClick={props.handleOnClick}
      className={`inline-flex items-center justify-center cursor-pointer ${size} ${textColor} ${props.className}`}
      whileHover={customHoverEffect}
      whileTap={props.tapEffect}
      transition={props.transition}
    >
      {icon}
    </motion.div>
  );
};
