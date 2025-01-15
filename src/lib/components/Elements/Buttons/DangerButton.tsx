import { type BaseButtonProps, BaseButton } from "./BaseButton";

export const DangerButton = (props: Omit<BaseButtonProps, "className">) => (
  <BaseButton {...props} className="bg-red-500 text-white" />
);
