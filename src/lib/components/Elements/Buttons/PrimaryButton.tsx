import { BaseButton, type BaseButtonProps } from "./BaseButton";

type PrimaryButtonButtonProps = Omit<BaseButtonProps, "className">;

export const PrimaryButton = ({ ...props }: PrimaryButtonButtonProps) => {
  const customHoverEffect = {
    scale: 1,
    boxShadow: props.glowEffect
      ? "5px 5px 15px rgba(6, 182, 212, 0.4)"
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
