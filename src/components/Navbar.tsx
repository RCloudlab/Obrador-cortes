import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  type NavLink = {
    name: string;
    path: string;
    type: string;
  };

  const navLinks = [
    { name: "Inicio", path: "/", type: "router" },
    { name: "Mayoreo", path: "/mayoreo", type: "router" },
    { name: "Carnitas", path: "/carnitas", type: "router" },
    { name: "Contacto", path: "/contacto", type: "router" },
  ];

  const renderLink = (link: NavLink, mobile = false) => {
    const className = mobile
      ? "block w-full py-4 hover:text-red-600 hover:bg-slate-50 transition border-b border-slate-100 last:border-0"
      : "hover:text-red-600 transition relative group";

    const content = (
      <>
        {link.name}
        {!mobile && (
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full"></span>
        )}
      </>
    );

    if (link.type === "router") {
      return (
        <Link
          key={link.name}
          to={link.path}
          className={className}
          onClick={() => setIsOpen(false)}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        key={link.name}
        href={link.path}
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {content}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-red-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        <Link to="/" className="flex flex-col leading-none z-50">
          <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
            OBRADOR <span className="text-red-600">CORTÉS</span>
          </span>
          <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
            Industrializadora Michoacana
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 font-bold uppercase text-sm tracking-widest text-slate-800">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:tu-numero"
            className="bg-black text-white px-5 py-2.5 rounded-sm font-bold flex items-center gap-2 hover:bg-red-600 transition shadow-md group"
          >
            <Phone size={18} className="group-hover:animate-pulse" />
            <span className="hidden sm:inline tracking-wider">LLAMAR</span>
          </a>

          <button
            className="md:hidden text-slate-900 hover:text-red-600 transition p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-white border-b-4 border-red-600 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-20 opacity-100"
            : "top-[-400px] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4 font-bold uppercase text-sm tracking-widest text-slate-800 text-center">
          {navLinks.map((link) => renderLink(link, true))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
