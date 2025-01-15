interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

export const InputField = ({
  value,
  onChange,
  placeholder,
  className = "",
}: InputFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 bg-transparent border-1 border-neutral-600 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all ${className}`}
    />
  );
};
