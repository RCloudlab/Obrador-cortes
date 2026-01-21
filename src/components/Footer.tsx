import { MapPin, Phone, Clock } from 'lucide-react';
import logoPath from '../assets/logo-obrador.svg';

const Footer = () => {

  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-red-600">
      {/* Regresamos a 3 columnas para llenar el espacio central */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        {/* COLUMNA 1: IDENTIDAD Y LOGO */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg h-fit shadow-lg shadow-red-900/20">
              <img 
                src={logoPath} 
                alt="Logo Obrador Cortés" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-none select-none">
              <span className="text-2xl font-black text-white tracking-tighter">
                OBRADOR <span className="text-red-600">CORTÉS</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                Industrializadora Michoacana
              </span>
            </div>
          </div>
          <p className="leading-relaxed text-slate-400">
            Especialistas en la industrialización de cárnicos. Calidad premium en cortes de res, cerdo y las mejores carnitas de la región.
          </p>
        </div>

        {/* COLUMNA 2 (NUEVA): HORARIOS Y SERVICIOS - Rellena el centro */}
        <div className="flex flex-col space-y-6">
           <h4 className="text-white font-bold uppercase tracking-widest border-b border-slate-800 pb-2 inline-block w-fit">
            Horarios de Atención
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between gap-8 border-b border-slate-800 border-dashed pb-1">
                  <span className="text-slate-400">Lunes - Sábado</span>
                  <span className="text-white font-medium">6:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between gap-8 pb-1">
                  <span className="text-slate-400">Domingo</span>
                  <span className="text-white font-medium">6:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA 3: CONTACTO (Alineado a la derecha en escritorio) */}
        <div className="flex flex-col md:items-end">
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
            Ubicación y Contacto
          </h4>
          <ul className="space-y-3 md:text-right">
            <li>
              <a 
                href="https://www.google.com/maps/place/OBRADOR+CORT%C3%89S+Industrializadora+Michoacana+de+Carne+S.A.+de+C.V./@19.7161799,-101.1735078,17z/data=!3m1!4b1!4m6!3m5!1s0x842d0f9a5950f577:0x1f93f2f85aee935c!8m2!3d19.7161799!4d-101.1709329!16s%2Fg%2F11tdgkf95t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex md:flex-row-reverse items-start gap-3 group hover:text-white transition duration-300"
              >
                <MapPin className="text-red-600 shrink-0 mt-1 group-hover:scale-110 transition" size={20}/> 
                <span className="group-hover:underline decoration-red-600 underline-offset-4 leading-relaxed">
                  Block 2 Bodega 55-A, Central de Abastos, <br />
                  58218 Morelia, Michoacán.
                </span>
              </a>
            </li>
            <li>
              <a 
                href="tel:+524436721870" 
                className="flex md:flex-row-reverse items-center gap-3 group hover:text-white transition duration-300 mt-4"
              >
                <Phone className="text-red-600 shrink-0 group-hover:scale-110 transition" size={20}/> 
                <span className="group-hover:text-red-400 transition font-medium tracking-wide text-lg">
                  +52 443 672 1870
                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BARRA INFERIOR COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Obrador Cortés. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1 hover:text-slate-300 transition cursor-default">
          Desarrollado con <span className="text-red-800">♥</span> por <span className="font-bold text-slate-400">RVEsp</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;