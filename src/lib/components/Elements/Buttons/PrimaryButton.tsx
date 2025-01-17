import { BaseButton, type BaseButtonProps } from "./BaseButton";
type PrimaryButtonProps = Omit<BaseButtonProps, "className">;
export const PrimaryButton = (props: PrimaryButtonProps) => (
  <BaseButton {...props} className="bg-cyan-500 text-white " />
);
