import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* COLUMNA 1: IDENTIDAD */}
        <div className="space-y-4">
          <div className="flex flex-col leading-none select-none">
            <span className="text-2xl font-black text-white tracking-tighter">
              OBRADOR <span className="text-red-600">CORTÉS</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              Industrializadora Michoacana
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Especialistas en la industrialización de cárnicos. Calidad premium en cortes de res, cerdo y las mejores carnitas de la región.
          </p>
        </div>

        {/* COLUMNA 2: CONTACTO DIRECTO */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-slate-800 pb-2 inline-block">
            Ubicación y Contacto
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a 
                href="https://www.google.com/maps/place/OBRADOR+CORT%C3%89S+Industrializadora+Michoacana+de+Carne+S.A.+de+C.V./@19.7161799,-101.1735078,17z/data=!3m1!4b1!4m6!3m5!1s0x842d0f9a5950f577:0x1f93f2f85aee935c!8m2!3d19.7161799!4d-101.1709329!16s%2Fg%2F11tdgkf95t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:text-white transition duration-300"
              >
                <MapPin className="text-red-600 shrink-0 mt-1 group-hover:scale-110 transition" size={18}/> 
                <span className="group-hover:underline decoration-red-600 underline-offset-4">
                  Block 2 Bodega 55-A, Central de Abastos, <br />
                  58218 Morelia, Michoacán.
                </span>
              </a>
            </li>
            <li>
              <a 
                href="tel:+524436721870" 
                className="flex items-center gap-3 group hover:text-white transition duration-300"
              >
                <Phone className="text-red-600 shrink-0 group-hover:scale-110 transition" size={18}/> 
                <span className="group-hover:text-red-400 transition font-medium tracking-wide">
                  +52 443 672 1870
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: SOCIALES Y LEGAL */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-slate-800 pb-2 inline-block">
              Redes Sociales
            </h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="bg-slate-800 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-slate-800 p-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Obrador Cortés. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1 hover:text-slate-300 transition cursor-default">
          Desarrollado con <span className="text-red-800">♥</span> por <span className="font-bold text-slate-400">RVCode</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;