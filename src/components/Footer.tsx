import { MapPin, MessageCircle, Store, Utensils } from 'lucide-react';
import logoPath from '../assets/logo-obrador.svg';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-red-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        {/* COLUMNA 1: IDENTIDAD Y LOGO */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg h-fit shadow-lg shadow-red-900/20">
              <img 
                src={logoPath} 
                alt="Logo Carnicería Obrador Cortés" 
                className="h-12 w-auto object-contain"
                loading="lazy"
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
            Especialistas en la industrialización de cárnicos. Calidad premium en cortes de res, cerdo y las mejores carnitas de la Central de Abastos.
          </p>
        </div>

        {/* COLUMNA 2: HORARIOS DIFERENCIADOS */}
        <div className="flex flex-col">
           <h4 className="text-white font-bold uppercase tracking-widest border-b border-slate-800 pb-2 inline-block w-fit mb-6">
            Horarios de Servicio
          </h4>
          
          <div className="space-y-5">
            {/* Bloque 1: Obrador */}
            <div>
                <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                    <Store size={14} /> <span>Carniceria</span>
                </div>
                <div className="pl-6 space-y-1">
                    <div className="flex justify-between text-slate-400">
                        <span>Lunes - Sábado</span>
                        <span className="text-white font-medium">6:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                        <span>Domingo</span>
                        <span className="text-white font-medium">6:00 AM - 3:00 PM</span>
                    </div>
                </div>
            </div>

            {/* Separador Sutil */}
            <div className="border-t border-slate-800 border-dashed w-3/4 ml-6"></div>

            {/* Bloque 2: Comida */}
            <div>
                <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                    <Utensils size={14} /> <span>Carnitas </span>
                </div>
                <div className="pl-6 space-y-1">
                    <div className="flex justify-between text-slate-400">
                        <span>Lunes - Viernes</span>
                        <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                        <span>Fines de Semana</span>
                        <span className="text-white font-medium">8:00 AM - 4:00 PM</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* COLUMNA 3: CONTACTO (SEO Local Optimizado) */}
        <div className="flex flex-col md:items-end">
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">
            Ubicación y Contacto
          </h4>
          
          {/* Tag 'address' mejora el SEO semántico para ubicación */}
          <address className="not-italic space-y-4 md:text-right">
            <div>
              <a 
                href="https://maps.google.com/?q=Central+de+Abastos+Morelia+Bodega+55A" // Sugerencia: Usa un link real si lo tienes
                target="_blank" 
                rel="noopener noreferrer"
                title="Ver ubicación en Google Maps"
                className="flex md:flex-row-reverse items-start gap-3 group hover:text-white transition duration-300"
              >
                <MapPin className="text-red-600 shrink-0 mt-1 group-hover:scale-110 transition" size={20}/> 
                <span className="group-hover:underline decoration-red-600 underline-offset-4 leading-relaxed text-slate-400 group-hover:text-slate-200">
                  Block 2 Bodega 55-A,<br /> 
                  Central de Abastos,<br />
                  58218 Morelia, Michoacán.
                </span>
              </a>
            </div>
            
            <div>
              <a 
                href="https://wa.me/524436721870"
                title="Llamar al Obrador"
                className="flex md:flex-row-reverse items-center gap-3 group hover:text-white transition duration-300 mt-2"
              >
                <MessageCircle className="text-red-600 shrink-0 group-hover:scale-110 transition" size={20}/> 
                <span className="group-hover:text-red-400 transition font-medium tracking-wide text-lg text-white">
                  +52 443 672 1870
                </span>
              </a>
            </div>
          </address>
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