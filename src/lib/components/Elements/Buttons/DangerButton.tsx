import { type BaseButtonProps, BaseButton } from "./BaseButton";

type DangerButtonProps = Omit<BaseButtonProps, "className">;

export const DangerButton = (props: DangerButtonProps) => (
  <BaseButton {...props} className="bg-red-500 text-white" />
);
