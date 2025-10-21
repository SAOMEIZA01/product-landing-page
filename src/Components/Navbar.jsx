import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({
  sections = ["home", "features", "pricing", "testimonials", "contact"],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md bg-white shadow"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <h1
              className="text-xl font-bold text-white hidden md:block cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              FlowSync
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-white dark:text-slate-100">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="capitalize hover:text-blue-600"
              >
                {s}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 rounded-full bg-sky-500 text-white hover:bg-blue-700">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay + sliding sidebar (keeps mounted for smooth transition) */}
      <div
        className={`fixed inset-0 z-40 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        {/* Sidebar */}
        <aside
          className={`absolute top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 shadow transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-slate-700">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-1"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-left text-base capitalize text-slate-800 dark:text-slate-100 hover:text-blue-600"
              >
                {s}
              </button>
            ))}
          </nav>
        </aside> 
      </div>

      <ThemeToggle />

    </>
  );
};

export default Navbar;
