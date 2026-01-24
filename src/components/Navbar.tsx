import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo-obrador.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  type NavLink = {
    name: string;
    path: string;
    type: string;
  };

  const navLinks: NavLink[] = [
    { name: "Inicio", path: "/", type: "router" },
    { name: "Carnes", path: "/carnes", type: "router" },
    { name: "Carnitas", path: "/carnitas", type: "router" },
    { name: "Contacto", path: "/contacto", type: "router" },
  ];

  // --- ANIMACIÓN VARIANTS ---
  // --- ANIMACIÓN VARIANTS ---
  const menuVars = {
    initial: {
      scaleY: 0,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        // AGREGAR "as const" AQUÍ ABAJO 👇
        ease: [0.12, 0, 0.39, 0] as const, 
        staggerChildren: 0.08,
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
        // AGREGAR "as const" TAMBIÉN AQUÍ 👇
        ease: [0.22, 1, 0.36, 1] as const, 
      },
    },
  };

  const linkVars = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      y: 10,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const renderLink = (link: NavLink, mobile = false) => {
    // Estilos Desktop
    if (!mobile) {
      const className = "hover:text-red-600 transition relative group";
      const content = (
        <>
          {link.name}
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full rounded-full"></span>
        </>
      );

      return link.type === "router" ? (
        <Link key={link.name} to={link.path} className={className}>
          {content}
        </Link>
      ) : (
        <a key={link.name} href={link.path} className={className}>
          {content}
        </a>
      );
    }

    // Estilos Mobile (Dentro de motion)
    const className =
      "block w-full py-4 text-slate-800 hover:text-red-600 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 text-center";

    return (
      <motion.div key={link.name} variants={linkVars}>
        {link.type === "router" ? (
          <Link
            to={link.path}
            className={className}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ) : (
          <a
            href={link.path}
            className={className}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        )}
      </motion.div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-red-600 shadow-xl font-sans">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center bg-white relative z-50">
        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3 z-50 group text-left" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Logo Obrador Cortés"
            className="h-10 w-auto md:h-14 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
              OBRADOR <span className="text-red-600">CORTÉS</span>
            </span>
            <span className="text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.15em] md:tracking-[0.2em]">
              Industrializadora Michoacana
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex space-x-8 font-bold uppercase text-sm tracking-widest text-slate-800">
          {navLinks.map((link) => renderLink(link))}
        </div>

        {/* BOTONES ACCIÓN */}
        <div className="flex items-center gap-4">
          {/* BOTÓN WHATSAPP (Sustituye a Llamar) */}
          <a
            href="https://wa.me/524436721870"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-md font-bold flex items-center gap-2 hover:bg-green-600 transition shadow-md group hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle size={20} className="text-white fill-white/20" />
            <span className="hidden sm:inline tracking-wider text-sm">WHATSAPP</span>
          </a>

          {/* HAMBURGER MENU */}
          <button
            className="md:hidden text-slate-900 hover:text-red-600 transition p-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Con AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            // origin-top para que se despliegue desde arriba como una persiana
            className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-red-600 shadow-2xl overflow-hidden origin-top"
          >
            <div className="flex flex-col px-6 py-6 font-bold uppercase text-sm tracking-widest">
              {navLinks.map((link) => renderLink(link, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;