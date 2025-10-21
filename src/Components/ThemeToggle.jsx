import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {console.error();
    }
  }, [dark]);
  
  const [isWide, setIsWide] = useState();
  
  useEffect(()=>{
    const handleResize = () => setIsWide(window.innerWidth >=765);
    window.addEventListener('resize', handleResize);

    return() => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className={`fixed right-8 p-3 rounded-full bg-white dark:bg-slate-600 shadow z-50 ${isWide ? "bottom-6" : "top-3"}`}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
