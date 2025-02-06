interface InputFieldProps {
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  ref?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
  readOnly?: boolean;
  label?: string;
  labelClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

export const InputField = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  id,
  name,
  ref,
  disabled = false,
  readOnly = false,
  label,
  labelClassName = "",
  leftIcon,
  rightIcon,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium text-neutral-300 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {leftIcon}
          </span>
        )}
        <input
          id={id}
          name={name}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className={`w-full p-3 bg-transparent border border-neutral-600 rounded-md text-neutral-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all 
          ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
