import { type BaseButtonProps, BaseButton } from "./BaseButton";

type DangerButtonProps = BaseButtonProps;

export const DangerButton = ({ ...props }: DangerButtonProps) => {
  const customHoverEffect = props.animationHover
    ? {
        boxShadow: props.glowEffect ? "0px 0px 20px rgba(255, 0, 0, 0.8)" : {},
        ...props.hoverEffect,
      }
    : {};

  return (
    <BaseButton
      {...props}
      className={`bg-red-500 text-white hover:bg-red-600 ${props.className}`}
      hoverEffect={customHoverEffect}
    />
  );
};
