import { BaseButton, type BaseButtonProps } from "./BaseButton";

type SecondaryButtonProps = Omit<BaseButtonProps, "className">;

export const SecondaryButton = ({ ...props }: SecondaryButtonProps) => {
  const customHoverEffect = {
    scale: 1,
    boxShadow: props.glowEffect
      ? "0px 0px 20px rgba(128, 0, 128, 0.9)"
      : undefined,
  };

  return (
    <BaseButton
      {...props}
      className="bg-purple-600 hover:bg-purple-700"
      hoverEffect={customHoverEffect}
    />
  );
};
