import { type BaseButtonProps, BaseButton } from "./BaseButton";

type DangerButtonProps = Omit<BaseButtonProps, "className">;

export const DangerButton = ({ ...props }: DangerButtonProps) => {
  const customHoverEffect = {
    scale: 1,
    boxShadow: props.glowEffect
      ? "0px 0px 20px rgba(255, 0, 0, 0.8)"
      : undefined,
  };

  return (
    <BaseButton
      {...props}
      className="bg-red-500 text-white hover:bg-red-600"
      hoverEffect={customHoverEffect}
    />
  );
};
