import { BaseButton } from "../../../../index";
import type { BaseButtonProps } from "./BaseButton";

interface IconButtonProps extends BaseButtonProps {
  icon: React.ReactNode;
  size?: string;
  textColor?: string;
}

export const IconButton = ({
  icon,
  size = " text-4xl",
  textColor = " text-cyan-500",
  ...props
}: IconButtonProps) => {
  const customHoverEffect = props.animationHover
    ? {
        ...props.hoverEffect,
        boxShadow: props.glowEffect
          ? "0px 0px 15px rgba(0, 255, 255, 0.8)"
          : "",
      }
    : {};

  return (
    <BaseButton
      {...props}
      className={` ${props.className} `}
      hoverEffect={customHoverEffect}
    >
      <div className={`${textColor} ${size}`}>{icon}</div>
    </BaseButton>
  );
};
