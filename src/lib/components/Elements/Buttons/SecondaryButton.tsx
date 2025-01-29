import { BaseButton, type BaseButtonProps } from "./BaseButton";
type SecondaryButtonProps = BaseButtonProps;

export const SecondaryButton = ({ ...props }: SecondaryButtonProps) => {
  const customHoverEffect = props.animationHover
    ? {
        boxShadow: props.glowEffect
          ? "0px 0px 20px rgba(128, 0, 128, 0.9)"
          : {},
        ...props.hoverEffect,
      }
    : {};

  return (
    <BaseButton
      {...props}
      className={`bg-purple-600 hover:bg-purple-700 ${props.className}`}
      hoverEffect={customHoverEffect}
    />
  );
};
