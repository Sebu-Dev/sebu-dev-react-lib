import { BaseButton, type BaseButtonProps } from "./BaseButton";

export const PrimaryButton = (props: Omit<BaseButtonProps, "className">) => (
  <BaseButton {...props} className="bg-cyan-500 text-white " />
);
