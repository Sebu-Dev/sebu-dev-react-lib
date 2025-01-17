import { BaseButton, type BaseButtonProps } from "./BaseButton";

type PrimaryButtonButtonProps = Omit<BaseButtonProps, "className">;

export const PrimaryButton = ({ ...props }: PrimaryButtonButtonProps) => {
  const customHoverEffect = {
    scale: 1,
    boxShadow: props.glowEffect
      ? "0px 0px 20px rgba(0, 255, 255, 0.6)"
      : undefined,
  };

  return (
    <BaseButton
      {...props}
      className="hover:bg-cyan-400/90 bg-cyan-500"
      hoverEffect={customHoverEffect}
    />
  );
};
