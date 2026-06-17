import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Smartphone, ArrowUpRight, MessageSquare, CheckCircle2, Sparkles, Circle } from 'lucide-react';

// --- COMPONENTE: FORMAS GEOMÉTRICAS DEL FONDO ---
function FormaElegante({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }: { className?: string; delay?: number; width?: number; height?: number; rotate?: number; gradient?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute pointer-events-none ${className || ''}`}
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent border border-white/[0.1] shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] backdrop-blur-[2px] ${gradient}`} />
      </motion.div>
    </motion.div>
  );
}

// --- COMPONENTE: TARJETA INTERACTIVA DE PANTALLAS 3D ---
interface TarjetaPantallaProps {
  className?: string;
  title: string;
  description: string;
  date: string;
}

function TarjetaPantalla({ className, title, description, date }: TarjetaPantallaProps) {
  return (
    <div className={`relative flex h-36 w-[20rem] sm:w-[22rem] -skew-y-[6deg] select-none flex-col justify-between rounded-xl border border-white/10 bg-[#070a13]/80 backdrop-blur-md px-5 py-4 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/50 hover:bg-[#0c1222] hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] ${className || ''}`}>
      <div className="flex items-center gap-3">
        <span className="relative inline-flex rounded-full bg-cyan-950/80 p-1.5 border border-cyan-500/30">
          <Sparkles className="size-4 text-cyan-400" />
        </span>
        <p className="text-lg font-semibold text-white tracking-tight">{title}</p>
      </div>
      <p className="text-sm text-neutral-300 font-light">{description}</p>
      <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">{date}</p>
    </div>
  );
}

function GaleriaPantallas() {
  const cartas = [
    { title: "Tiendas Virtuales", description: "E-commerce optimizado y rápido.", date: "Estructura Premium", className: "[grid-area:stack] z-30" },
    { title: "Interfaces Fluidas", description: "Diseños limpios que retienen visitas.", date: "Alta Estética", className: "[grid-area:stack] translate-x-8 translate-y-6 sm:translate-x-12 sm:translate-y-8 z-20 opacity-80" },
    { title: "Código de Alta Gama", description: "Rendimiento perfecto en celulares.", date: "Optimización Total", className: "[grid-area:stack] translate-x-16 translate-y-12 sm:translate-x-24 sm:translate-y-16 z-10 opacity-50" }
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center py-16 overflow-visible w-full max-w-sm mx-auto left-[-20px] sm:left-0 relative">
      {cartas.map((card, idx) => (
        <TarjetaPantalla key={idx} {...card} />
      ))}
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [activeNav, setActiveNav] = useState('inicio');
  const WHATSAPP_URL = "https://wa.me/595984190223?text=Hola!%20Me%20gustaría%20iniciar%20un%20proyecto%20de%20alto%20nivel%20contigo.";

  return (
    <div className="bg-[#020204] min-h-screen text-white relative overflow-x-hidden font-sans antialiased selection:bg-cyan-500/30">
      
      {/* CAPA VISUAL DE FONDO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-cyan-500/[0.02] blur-3xl" />
        <FormaElegante delay={0.2} width={450} height={110} rotate={10} gradient="from-indigo-500/[0.07]" className="left-[-10%] top-[12%]" />
        <FormaElegante delay={0.4} width={380} height={90} rotate={-12} gradient="from-cyan-500/[0.07]" className="right-[-10%] top-[60%]" />
      </div>

      {/* MENÚ FLOTANTE NAVEGABLE */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl">
        <nav className="bg-[#040408]/80 backdrop-blur-xl border border-white/[0.06] py-2.5 px-5 rounded-full flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <span className="text-xs font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            V.H.
          </span>
          <div className="flex gap-0.5">
            {['inicio', 'proyectos', 'explorar', 'quien-soy'].map((id) => (
              <button
                key={id}
                onClick={() => {
                  setActiveNav(id);
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-[10px] uppercase tracking-widest px-3 py-2 rounded-full transition-all duration-300 ${
                  activeNav === id ? 'bg-white/10 text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {id === 'quien-soy' ? 'Quién Soy' : id}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* SECCIÓN HERO */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 relative z-10 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <Circle className="h-1.5 w-1.5 fill-cyan-400 animate-pulse" />
            <span className="text-[10px] font-medium text-neutral-400 tracking-widest uppercase">Diseño Web Exclusivo & E-Commerce</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">Código Limpio.</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-cyan-300">Diseño de Primera.</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Desarrollo plataformas web y tiendas virtuales de alta velocidad. Estética premium adaptada para enganchar visitas y transformarlas en clientes.
          </p>

          <div className="pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex bg-white text-black font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full items-center gap-2 hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/5">
              Iniciar Proyecto <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN TRABAJOS / PRODUCTO HERO */}
      <section id="proyectos" className="px-6 py-24 max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-[11px] uppercase tracking-widest text-cyan-400 font-bold">Estructura Avanzada</h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight">Desarrollos a Medida</p>
        </div>

        <div className="w-full bg-[#04060a] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded border border-cyan-500/20 uppercase tracking-wider">Alta Fidelidad</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">Páginas de Venta y Comercio Electrónico</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Creo estructuras visuales limpias pensadas específicamente para retener la atención del usuario. Ordeno los flujos de información estratégicamente para simplificar la conversión.
            </p>
          </div>
          <div className="bg-[#020204] rounded-xl border border-white/[0.05] p-5 h-44 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center">
              <p className="text-[9px] uppercase text-neutral-500 tracking-widest font-mono">Optimización de Carga</p>
              <span className="text-emerald-400 text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">Rendimiento 100%</span>
            </div>
            <div className="w-full h-16 flex items-end gap-2 px-1">
              {[40, 65, 45, 75, 90, 85, 95, 70, 100].map((h, i) => (
                <div key={i} className="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full rounded-t-[3px] transition-all duration-500" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MÓDULOS DE VALOR */}
      <section className="pb-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#04060a]/40 border border-white/[0.05] p-6 rounded-xl space-y-3 backdrop-blur-sm">
            <Layers className="text-cyan-400 size-5" />
            <h4 className="text-base font-bold tracking-tight">Páginas de Venta</h4>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">Estructuras de embudo optimizadas con llamadas a la acción claras para captar leads.</p>
          </div>
          <div className="bg-[#04060a]/40 border border-white/[0.05] p-6 rounded-xl space-y-3 backdrop-blur-sm">
            <Smartphone className="text-cyan-400 size-5" />
            <h4 className="text-base font-bold tracking-tight">Experiencia Mobile</h4>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">Diseñadas bajo el concepto mobile-first; navegación gestual fluida e intuitiva.</p>
          </div>
          <div className="bg-[#04060a]/40 border border-white/[0.05] p-6 rounded-xl space-y-3 backdrop-blur-sm">
            <CheckCircle2 className="text-cyan-400 size-5" />
            <h4 className="text-base font-bold tracking-tight">Garantía Limpia</h4>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">Arquitectura de código sólida sin scripts basura. Velocidad pura y estable.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN INTERACTIVA: PANTALLAS 3D */}
      <section id="explorar" className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10 overflow-visible">
        <div className="space-y-3 mb-8">
          <span className="text-[10px] font-mono text-indigo-400 px-3 py-1 bg-indigo-400/10 border border-indigo-500/20 rounded-full uppercase tracking-widest">
            Comportamiento Tridimensional
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">Perspectiva Dinámica</h3>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            Las capas responden visualmente imitando profundidad real, logrando un entorno digital interactivo y moderno.
          </p>
        </div>
        <GaleriaPantallas />
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section id="quien-soy" className="bg-[#010103] border-t border-white/[0.05] py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-neutral-300 text-sm font-light leading-relaxed text-justify">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Filosofía de Trabajo</h3>
            <p>Evito los empaquetados pesados y las plantillas genéricas saturadas que destruyen los tiempos de carga. En el ecosistema digital actual, la agilidad técnica y la limpieza visual marcan la diferencia competitiva.</p>
            <p>Me dedico a construir interfaces fluidas y arquitecturas estables, asegurando que cada componente aporte valor real a la experiencia de navegación del usuario final.</p>
          </div>
          <div className="bg-[#04060a] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between shadow-xl">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-cyan-400 tracking-wider">// DESIGNER & DEVELOPER</div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">Enfoque centrado en la simetría visual, rendimiento técnico sobresaliente y usabilidad pragmática.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-lg hover:bg-white/10 transition-all active:scale-[0.98]">
              <MessageSquare size={13} /> WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#010103] border-t border-white/[0.05] py-8 text-center text-[10px] text-neutral-500 font-mono tracking-widest uppercase relative z-10">
        © {new Date().getFullYear()} Victor Hugo. Todos los derechos reservados.
      </footer>

    </div>
  );
}
