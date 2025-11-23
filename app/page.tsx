'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 🟢 NECESARIO PARA LA OPTIMIZACIÓN DE IMAGEN (WEB-P)
import Image from 'next/image'; 
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ExternalLink, 
  ChevronDown, 
  Code2, 
  Palette, 
  Rocket, 
  Star, 
  Server, 
  Database, 
  TrendingUp, 
  Cpu, 
  MessageCircle, 
  Layers3, 
  Cloud, 
  Type, 
  HardDrive, 
  Smartphone, 
  Bug, 
  Activity,
  MessageSquare 
} from 'lucide-react';
// ----------------------------------------------------------------------
// 🟢 DEFINICIONES DE TIPOS PARA TYPESCRIPT
// ----------------------------------------------------------------------

interface Skill {
  name: string;
  level: number;
  icon: React.ReactElement; 
  color: string;
}

interface ProjectDetail {
  key: string;
  value: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: React.ReactElement; 
  details: ProjectDetail[];
}

// ----------------------------------------------------------------------
// 🟢 INICIO DEL COMPONENTE
// ----------------------------------------------------------------------

export default function PortfolioPersonalizado() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
// --- 1. DATOS Y ENLACES DE CONTACTO ---

  const name = "José Ignacio Moreno Rojas";
  const title = "Ingeniero en Informática | Full-Stack Developer";

  // 🟢 ENLACES DE CONTACTO (REEMPLAZA LAS URLS AQUÍ)
  const socialLinks = {
    github: "https://github.com/Daxen01", 
    linkedin: "https://linkedin.com/in/josé-ignacio-morenos-rojas-188380274", 
    emailAddress: "jose.ignacio.moreno.rojas@gmail.com", 
    emailSubject: "Consulta Laboral - Portafolio de José", // 🟢 ASUNTO PREDETERMINADO
    emailBody: "Hola José Ignacio,\n\nVi tu portafolio y me gustaría conversar sobre una oportunidad.\n\nSaludos.", // 🟢 CUERPO PREDETERMINADO
    whatsappNumber: "56958282399", 
    whatsappMessage: "Hola José, vi tu portafolio y me gustaría conversar sobre una oportunidad."
  };
  
  // 🟢 CORRECTO: Enlace de WhatsApp
  const whatsappLink = `https://wa.me/${socialLinks.whatsappNumber}?text=${encodeURIComponent(socialLinks.whatsappMessage)}`;
  
  // 🟢 CORRECCIÓN: Enlace directo a la composición de correo de Gmail Web App (para que funcione siempre).
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.emailAddress}&su=${encodeURIComponent(socialLinks.emailSubject)}&body=${encodeURIComponent(socialLinks.emailBody)}`;
// -----------------------------------------------------------------------


  // Habilidades con COLORES UNIFORMES (Azul/Cian) aplicados
  const skills: Skill[] = [
    { name: 'React / React Native', level: 85, icon: <Layers3 className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' }, 
    { name: 'Node.js', level: 70, icon: <Server className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' }, 
    { name: 'Python / Django', level: 75, icon: <Cpu className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' }, 
    { name: 'MySQL / MongoDB', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' }, 
    { name: 'Cloud (AWS/GCP/Firebase)', level: 65, icon: <Cloud className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' }, 
    { name: 'Metodología SCRUM', level: 70, icon: <Activity className="w-6 h-6" />, color: 'from-blue-500 to-cyan-400' }, 
  ];
// Proyecto Único: App Equifar (Móvil y Escritorio)
  const projects: Project[] = [
    {
      title: 'Equifar: App de Asistencia Técnica (Móvil)',
      description: 'Implementación de la aplicación móvil para técnicos, permitiendo registrar asistencias en campo, incluso sin conexión a internet.',
      tech: ['React Native', 'Firebase (BD/Offline)', 'MySQL (Sincronización)', 'Tailwind CSS'],
      gradient: 'from-blue-700 via-blue-800 to-blue-900',
      icon: <Smartphone className="w-12 h-12" />, 
      details: [
       
      { key: 'Rol Principal', value: 'Full-Stack Developer (Análisis, Desarrollo, Implementación)' },
        { key: 'Plataforma', value: 'Móvil (Android)' },
        { key: 'Funcionalidades Clave', value: 'Registro de Asistencia Offline, Sincronización Automática, Generación de PDF con logos dinámicos, Captura de Firma Digital.'
      },
        { key: 'Impacto', value: 'Digitalización completa del registro de asistencias y mejora de la trazabilidad en campo.'
      },
      ]
    },
  ];
  const dashboardProject: Project = {
    title: 'Panel de Administración (Escritorio)',
    description: 'Aplicación de escritorio para administradores, encargada de la gestión de usuarios, clientes y la visualización centralizada de todas las asistencias.',
    tech: ['Electron', 'React', 'Firebase', 'MySQL (Central)', 'Tailwind CSS'],
    gradient: 'from-indigo-600 via-purple-700 to-indigo-800',
    icon: <TrendingUp className="w-12 h-12" />,
    details: [
      { key: 'Plataforma', value: 'Escritorio (Admin)' },
      { key: 'Funcionalidades Clave', value: 'Gestión CRUD de Usuarios y Clientes, Filtrado de Asistencias, Dashboard con Métricas, Respaldo en Nube.' },
    ]
  };
// --- 2. COMPONENTES REUTILIZABLES ---
  
  const StarFieldEffect = () => (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 opacity-50 blur-3xl"
      />
      <motion.div
 
        animate={{ x: [0, 200, 0], y: [0, -100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-400/10 opacity-30 blur-3xl"
      />
      <div 
          className="absolute inset-0 opacity-70"
          style={{
              backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 80%)',
              backgroundSize: '2px 2px',
              backgroundPosition: '0 0'
          }}
      />
    </div>
  );
  const SkillBar = ({ skill, delay }: { skill: Skill, delay: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3 text-blue-400">
        
        {skill.icon}
          <span className="text-xl font-semibold text-white group-hover:text-blue-500 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {skill.level}%
          </span>
        </div>
        
        <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay * 0.1 }}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
   
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
 
        </div>
      </motion.div>
    );
  const ProjectCard = ({ project, delay }: { project: Project, delay: number }) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        transition={{ delay: delay * 0.1 }}
        className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 
        transition-all cursor-pointer col-span-1"
      >
        <div className={`h-60 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center text-blue-200`}>
          <span className="relative z-10">{project.icon}</span>
        </div>
        
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
 
          <p className="text-gray-400 mb-4 text-lg">
            {project.description}
          </p>
          
          <div className="grid gap-4 my-6">
            {project.details.map((detail: ProjectDetail, k: number) => (
              <div key={k}>
           
              <p className="text-sm font-semibold text-blue-400">{detail.key}</p>
                <p className="text-white text-md">{detail.value}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, 
            j: number) => (
              <span
                key={j}
                className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold border border-blue-500/20"
              >
                {tech}
             
             </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  const WhatsAppFloatingButton = () => (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1.5
     
      }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(14, 165, 233, 0.8)" }} 
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full 
                 bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
                 flex items-center justify-center shadow-xl cursor-pointer"
    >
      <MessageSquare size={32} />
    </motion.a>
  );
// --- 3. SECCIÓN HERO (ACTUALIZADA con enlaces) ---

    const HeroSection = () => (
      <section id="inicio" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
           
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
     
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Soy</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {title}
         
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
    
              className="text-xl text-gray-300 max-w-xl"
            >
              {name}, estudiante de Ingeniería en Informática en INACAP.
              Apasionado por el desarrollo web y móvil, mi objetivo es integrarme a un equipo dinámico donde pueda aportar mis conocimientos técnicos y crear soluciones innovadoras.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#proyectos" // Enlace interno
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/50"
              >
                Ver Mi Trabajo
              </motion.a>
              
              {/* 🟢 CAMBIADO DE <motion.button> A <motion.a> */}
              <motion.a
                // 🟢 RUTA DEL ARCHIVO EN LA CARPETA 'public'
                href="/CV_José_Ignacio_Moreno_Rojas.pdf" // ⚠️ AJUSTA ESTA RUTA/NOMBRE
                // 🟢 ATRIBUTO DOWNLOAD: Fuerza la descarga en lugar de abrir el archivo en el navegador
                download="CV_José_Ignacio_Moreno_Rojas.pdf" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500/50 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-blue-500/10 transition-all"
              >
                Descargar CV
              </motion.a>
            </motion.div>

         
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 pt-4"
            >
              {[
    
                // 🟢 GitHub y LinkedIn usan target="_blank"
                { icon: <Github size={24} />, label: 'GitHub', href: socialLinks.github }, 
                { icon: <Linkedin size={24} />, label: 'LinkedIn', href: socialLinks.linkedin }, 
                // 🟢 USA EL ENLACE DIRECTO A GMAIL
                { icon: <Mail size={24} />, label: 'Email', href: gmailComposeLink } 
              ].map((social, i) => (
       
                <motion.a
                  key={i}
                  href={social.href}
                  // Abrimos todos en una nueva pestaña por ser enlaces externos
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/50 transition-all cursor-pointer"
                >
         
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Placeholder de Caracter y Elementos Flotantes (Actualizados) */}
          <motion.div
           
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <motion.div
      
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-blue-400/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-blue-400">
  
                  <Code2 size={120} />
                </div>
                
                {/* Floating elements */}
                {[
               
                  { icon: <Layers3 size={24} />, delay: 0, x: -100, y: -50 }, // React/Front
                  { icon: <Database size={24} />, delay: 0.5, x: 100, y: -80 }, // Databases
                  { icon: <Smartphone size={24} />, delay: 1, x: -80, y: 80 }, // Mobile Dev
                  { icon: <Cloud size={24} />, delay: 1.5, x: 120, y: 60 }, // Cloud
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
   
                    transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                    className="absolute"
                    style={{ left: `${item.x}px`, top: `${item.y}px` }}
                  >
             
                    <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center text-blue-400">
                      {item.icon}
                    </div>
                  </motion.div>
                ))}
      
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
  
          <ChevronDown size={40} className="text-blue-500" />
        </motion.div>
      </section>
    );
// --- 4. SECCIÓN SOBRE MÍ (VUELTA A LA POSICIÓN ORIGINAL SIN ESTRELLA) ---
  const AboutSection = () => (
    <section id="sobremi" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
       
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Mi Perfil
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pasión por la tecnología y la 
            creación de soluciones efectivas.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true 
            }}
            // 🟢 VUELVE A OCUPAR 2 COLUMNAS (MÁS ESPACIO PARA EL TEXTO)
            className="lg:col-span-2 space-y-6 text-lg text-gray-300"
          >
            <p>
              Soy <strong>José Ignacio Moreno Rojas</strong>, estudiante de Ingeniería en Informática en INACAP.
              A lo largo de mi formación y proyectos he desarrollado competencias sólidas en desarrollo web y móvil, manejo de bases de datos, frameworks modernos y herramientas de análisis.
            </p>
            <p>
              Domino lenguajes y tecnologías como <strong>Python</strong>, <strong>Java</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Django</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Firebase</strong>, <strong>MySQL</strong> y <strong>MongoDB</strong>.
              Además, tengo experiencia configurando y utilizando plataformas en la nube como <strong>AWS</strong> y <strong>Google Cloud</strong>.
            </p>
            <p>
              Aplico metodologías ágiles como <strong>Scrum</strong>, lo que me permite trabajar de manera eficiente en equipos colaborativos y adaptarme rápidamente a los cambios.
              Me defino como proactivo, responsable y con una rápida capacidad de aprendizaje.
            </p>
            <p className="font-semibold text-blue-400">
              Mi objetivo es aportar mis conocimientos técnicos para crear soluciones tecnológicas innovadoras que generen un impacto positivo y tangible.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block w-full"
            >
            {/* Mantener el div contenedor para el gradiente y el border, pero quitamos el box-shadow de aquí */}
            <div className="relative w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-white/10 p-6">
                <Image 
                    src="/images/informaticoazul.webp" 
                    alt="José Ignacio Moreno Rojas"
                    fill
                    // 🟢 APLICAMOS EL DROP-SHADOW AQUÍ CON UNA CLASE PERSONALIZADA O DE TAILWIND SI EXISTE
                    // Usaremos una clase personalizada en `tailwind.config.js` para mayor control
                    className="object-contain rounded-lg drop-shadow-cyan-glow" // 'object-contain' para que la imagen se vea completa
                    sizes="(max-width: 1024px) 100vw, 33vw" 
                    quality={85} 
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
// --- 5. SECCIÓN HABILIDADES (Sin cambios) ---
  const SkillsSection = () => (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        
          >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Competencias Técnicas
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Fuerzas clave en desarrollo y gestión de proyectos
  
          </p>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <SkillBar key={i} skill={skill} delay={i} />
          ))}
        </div>
        
        <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-6 rounded-xl bg-white/5 border border-white/10"
        >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Otras Habilidades Técnicas:</h3>
     
            <div className="flex flex-wrap gap-3 text-sm">
                {[
                    'Java (Intermedio)', 'HTML (Intermedio)', 'CSS (Básico)', 'Bootstrap (Básico)', 
                    'Javascript (Básico)', 'Kotlin (Básico)', 'Git (Intermedio)', 'Figma (Básico)', 
                 
                    'Electron (Básico)', 'Office (Intermedio)', 'R studio (Básico)', 'Power BI (Básico)',
                    'Linux (Básico)', 'Oracle (Intermedio)'
                ].map((item, i) => (
                    <span key={i} className="px-4 py-1.5 bg-gray-700/50 rounded-full text-gray-200">
                    
                    {item}
                    </span>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
// --- 6. SECCIÓN PROYECTOS (ACTUALIZADA con tecnologías divididas) ---
  const ProjectsSection = () => (
    <section id="proyectos" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
      
          >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Proyecto de Titulación
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Solución Full-Stack para la 
            gestión de asistencias técnicas de Equifar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
            {/* Tarjeta del proyecto principal (Móvil) */}
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} delay={i} />
            ))}

   
            {/* Tarjeta Adicional para Dashboard/Admin usando el mismo componente ProjectCard */}
            <ProjectCard project={dashboardProject} delay={0.2} />
        </div>
      </div>
    </section>
  );
// --- 7. RENDERIZADO PRINCIPAL ---

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* FONDO DINÁMICO DE ESTRELLAS/NEBULOSAS */}
      <StarFieldEffect />


      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-blue-500/30"
     
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-blue-500 
              to-cyan-400 bg-clip-text text-transparent">
                {'Mi Portafolio'}
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
            {/* Se quitó el botón 'Hire Me' */}
            {['Inicio', 'Sobre Mi', 'Skills', 'Proyectos', 'Contacto'].map((item) => (
 
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  whileHover={{ scale: 1.1, color: '#0ea5e9' }}
                  className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer relative group"
 
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
       
          </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-500">
              {menuOpen ?
              <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
             
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-xl border-t border-blue-500/30"
            >
              <div className="px-6 py-6 space-y-4">
                {['Inicio', 'Sobre Mi', 'Skills', 'Proyectos', 'Contacto'].map((item) => (
     
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="block text-gray-300 hover:text-blue-500 transition-colors text-lg"
                    // 🟢 CORRECCIÓN DE SINTAXIS
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
 
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />

        {/* CTA Section (Botón 'Contáctame' AHORA USA gmailComposeLink con target="_blank") */}
        <section id="contacto" className="py-32 px-6 relative">
 
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 
              backdrop-blur-xl border border-white/10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Conectemos y <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">creemos valor</span>.
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href={gmailComposeLink} // 🟢 USA EL ENLACE DIRECTO A GMAIL
                  target="_blank" 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(14, 165, 233, 0.6)" }}
             
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-lg shadow-xl shadow-blue-500/50"
                >
                  <Mail size={20} className="inline mr-2" /> Contáctame
                </motion.a>
          
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* LLAMADA AL BOTÓN FLOTANTE DE WHATSAPP */}
      {mounted && <WhatsAppFloatingButton />}

      {/* Footer (Íconos linkeados) */}
      <footer className="py-12 px-6 border-t border-blue-500/20 relative z-10">
        <div 
        className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 <span className="text-blue-500 font-semibold">{name}</span>.
                Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-6">
              <motion.a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
   
                whileHover={{ scale: 1.1, color: '#0ea5e9' }} 
                className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1, color: '#0ea5e9' }} 
                className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
        
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href={gmailComposeLink} // 🟢 USA EL ENLACE DIRECTO A GMAIL
                target="_blank" // 🟢 ASEGURA QUE SE ABRE EN UNA NUEVA PESTAÑA
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#0ea5e9' }} 
    
                className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
   
    </div>
  );
}