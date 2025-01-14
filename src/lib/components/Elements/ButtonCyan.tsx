import { motion } from "framer-motion";

interface ButtonCyanProps {
  handleOnClick: () => void;
  label: string;
}

export const ButtonCyan = ({ handleOnClick, label }: ButtonCyanProps) => {
  return (
    <motion.button
      onClick={handleOnClick}
      className="px-6 py-3 bg-cyan-500 text-white rounded-full shadow-lg"
      whileHover={{ scale: 1.1, backgroundColor: "#38bdf8" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {label}
    </motion.button>
  );
};
