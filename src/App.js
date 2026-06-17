const WHATSAPP_URL = "https://wa.me/595984190223?text=Hola!%20Me%20gustaría%20iniciar%20un%20proyecto%20de%20alto%20nivel%20contigo.";

function App() {
  return `
    <div class="bg-[#020204] min-h-screen text-white relative overflow-x-hidden font-sans antialiased selection:bg-cyan-500/30">
      
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-cyan-500/[0.02] blur-3xl"></div>
        <div class="absolute left-[-10%] top-[12%] w-[450px] h-[110px] bg-gradient-to-r from-indigo-500/[0.07] to-transparent rounded-full border border-white/[0.05] blur-[1px] rotate-[10deg] animate-pulse"></div>
        <div class="absolute right-[-10%] top-[60%] w-[380px] h-[90px] bg-gradient-to-r from-cyan-500/[0.07] to-transparent rounded-full border border-white/[0.05] blur-[1px] rotate-[-12deg]"></div>
      </div>

      <header class="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl">
        <nav class="bg-[#040408]/80 backdrop-blur-xl border border-white/[0.06] py-3 px-6 rounded-full flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <span class="text-xs font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            V.H.
          </span>
          <div class="flex gap-4 text-[10px] uppercase tracking-widest font-semibold text-neutral-400">
            <span class="text-white">Inicio</span>
            <span>Proyectos</span>
            <span>Explorar</span>
          </div>
        </nav>
      </header>

      <section class="min-h-screen flex flex-col justify-center items-center px-6 pt-24 relative z-10 text-center">
        <div class="space-y-6 max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 block"></span>
            <span class="text-[10px] font-medium text-neutral-400 tracking-widest uppercase">Diseño Web Exclusivo & E-Commerce</span>
          </div>
          
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span class="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">Código Limpio.</span><br />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-cyan-300">Diseño de Primera.</span>
          </h1>

          <p class="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Desarrollo plataformas web y tiendas virtuales de alta velocidad. Estética premium adaptada para enganchar visitas y transformarlas en clientes.
          </p>

          <div class="pt-4">
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex bg-white text-black font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full items-center gap-2 hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/5">
              Iniciar Proyecto →
            </a>
          </div>
        </div>
      </section>

      <section class="px-6 py-24 max-w-5xl mx-auto relative z-10">
        <div class="text-center space-y-2 mb-12">
          <h2 class="text-[11px] uppercase tracking-widest text-cyan-400 font-bold">Estructura Avanzada</h2>
          <p class="text-2xl sm:text-3xl font-bold tracking-tight">Desarrollos a Medida</p>
        </div>

        <div class="w-full bg-[#04060a] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-5">
            <span class="text-[10px] font-mono text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded border border-cyan-500/20 uppercase tracking-wider">Alta Fidelidad</span>
            <h3 class="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">Páginas de Venta y Comercio Electrónico</h3>
            <p class="text-neutral-400 text-sm font-light leading-relaxed">
              Creo estructuras visuales limpias pensadas específicamente para retener la atención del usuario. Ordeno los flujos de información estratégicamente para simplificar la conversión.
            </p>
          </div>
          <div class="bg-[#020204] rounded-xl border border-white/[0.05] p-5 h-44 flex flex-col justify-between relative overflow-hidden">
            <div class="flex justify-between items-center">
              <p class="text-[9px] uppercase text-neutral-500 tracking-widest font-mono">Optimización de Carga</p>
              <span class="text-emerald-400 text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">Rendimiento 100%</span>
            </div>
            <div class="w-full h-16 flex items-end gap-2 px-1 pt-4">
              <div class="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full h-[40%] rounded-t-[3px]"></div>
              <div class="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full h-[65%] rounded-t-[3px]"></div>
              <div class="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full h-[45%] rounded-t-[3px]"></div>
              <div class="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full h-[75%] rounded-t-[3px]"></div>
              <div class="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full h-[90%] rounded-t-[3px]"></div>
              <div class="bg-gradient-to-t from-cyan-600 to-cyan-400 w-full h-[95%] rounded-t-[3px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6 max-w-4xl mx-auto text-center relative z-10 overflow-visible">
        <div class="space-y-3 mb-16">
          <span class="text-[10px] font-mono text-indigo-400 px-3 py-1 bg-indigo-400/10 border border-indigo-500/20 rounded-full uppercase tracking-widest">
            Comportamiento Tridimensional
          </span>
          <h3 class="text-2xl sm:text-4xl font-bold tracking-tight">Perspectiva Dinámica</h3>
          <p class="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            Las capas responden visualmente imitando profundidad real, logrando un entorno digital interactivo y moderno.
          </p>
        </div>
        
        <div class="flex flex-col gap-6 items-center justify-center py-4 overflow-visible w-full relative">
          <div class="relative flex h-36 w-[20rem] sm:w-[22rem] -skew-y-[6deg] flex-col justify-between rounded-xl border border-white/10 bg-[#070a13]/90 backdrop-blur-md px-5 py-4 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/50 shadow-xl z-30">
            <div class="flex items-center gap-3">
              <p class="text-lg font-semibold text-white tracking-tight">✨ Tiendas Virtuales</p>
            </div>
            <p class="text-sm text-neutral-300 font-light text-left">E-commerce optimizado y rápido.</p>
            <p class="text-[10px] text-neutral-500 font-mono tracking-wider uppercase text-left">Estructura Premium</p>
          </div>

          <div class="relative flex h-36 w-[20rem] sm:w-[22rem] -skew-y-[6deg] flex-col justify-between rounded-xl border border-white/10 bg-[#070a13]/70 backdrop-blur-md px-5 py-4 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/50 shadow-xl z-20 sm:translate-x-12 opacity-90">
            <div class="flex items-center gap-3">
              <p class="text-lg font-semibold text-white tracking-tight">✨ Interfaces Fluidas</p>
            </div>
            <p class="text-sm text-neutral-300 font-light text-left">Diseños limpios que retienen visitas.</p>
            <p class="text-[10px] text-neutral-500 font-mono tracking-wider uppercase text-left">Alta Estética</p>
          </div>
        </div>
      </section>

      <section class="bg-[#010103] border-t border-white/[0.05] py-24 px-6 relative z-10">
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-4 text-neutral-300 text-sm font-light leading-relaxed text-justify">
            <h3 class="text-2xl font-bold text-white tracking-tight mb-2">Filosofía de Trabajo</h3>
            <p>Evito los empaquetados pesados y las plantillas genéricas saturadas que destruyen los tiempos de carga. En el ecosistema digital actual, la agilidad técnica y la limpieza visual marcan la diferencia competitiva.</p>
            <p>Me dedico a construir interfaces fluidas y arquitecturas estables, asegurando que cada componente aporte valor real a la experiencia de navegación del usuario final.</p>
          </div>
          <div class="bg-[#04060a] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between shadow-xl">
            <div class="space-y-2">
              <div class="text-[10px] font-mono text-cyan-400 tracking-wider">// DESIGNER & DEVELOPER</div>
              <p class="text-xs text-neutral-400 font-light leading-relaxed">Enfoque centrado en la simetría visual, rendimiento técnico sobresaliente y usabilidad pragmática.</p>
            </div>
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-lg hover:bg-white/10 transition-all active:scale-[0.98]">
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      <footer class="bg-[#010103] border-t border-white/[0.05] py-8 text-center text-[10px] text-neutral-500 font-mono tracking-widest uppercase relative z-10">
        © 2026 Victor Hugo. Todos los derechos reservados.
      </footer>

    </div>
  `;
}

document.getElementById('root').innerHTML = App();
