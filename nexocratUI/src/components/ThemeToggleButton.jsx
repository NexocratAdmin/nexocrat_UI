import useDarkMode from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
      title="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon color="white" size={20} />}
    </button>
  );
};

export default ThemeToggleButton;
