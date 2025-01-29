import { BaseButton, type BaseButtonProps } from "./BaseButton";

type PrimaryButtonButtonProps = BaseButtonProps;
export const PrimaryButton = ({ ...props }: PrimaryButtonButtonProps) => {
  const customHoverEffect = props.animationHover
    ? {
        boxShadow: props.glowEffect
          ? "5px 5px 15px rgba(6, 182, 212, 0.4)"
          : {},
        ...props.hoverEffect,
      }
    : {};
  return (
    <BaseButton
      {...props}
      className={`hover:bg-cyan-400/90 bg-cyan-500 ${props.className}`}
      hoverEffect={customHoverEffect}
    />
  );
};
