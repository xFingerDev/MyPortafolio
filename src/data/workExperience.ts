import { Work } from "@/entities/Work";

export const workExperience: Work[] = [
  {
    company: "Goil",
    role: "Desarrollador Backend",
    period: "2023 Abril - 2025 Abril",
    url: "https://goil.app",
    description: `Desarrollo y mantenimiento de un sistema empresarial compuesto por un backoffice web para gestión interna
  y una aplicación móvil orientada al usuario final. Rol como Backend Developer, implementando nuevas funcionalidades,
  optimizando sistemas legacy y participando en tareas de DevOps.`,
    projects: [
      "Migración de una arquitectura de múltiples microservicios a un monolito optimizado",
      "Sistema de reservas con integración de pagos, notificaciones personalizadas y analíticas avanzadas",
      "Sistema de notas vinculables a otras funcionalidades (reservas, usuario, etc.)",
      "Mejora y dinamización del sistema de notificaciones: multilenguaje, analíticas, seguridad y atributos personalizados (@user)",
      "Notificaciones inteligentes generadas por IA según prompt",
      "Sistema de tarjetas de bono / suscripciones para gimnasios y eventos deportivos",
      "Desarrollo completo de sistema de chat tipo WhatsApp totalmente integrado",
      "Restructuración completa del sistema de sockets para adaptarlo a entornos multitenant",
      "Sistema Push/Sub para comunicación en tiempo real entre múltiples servidores",
      "Generador de sitios web tipo Wix con módulos y configuración automática mediante IA, basado en URL",
      "Sistema de colas para ejecución de código en segundo plano, optimizando procesos asincrónicos",
    ],
    technologies: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
      "Docker",
      "Redis",
      "BullMQ",
      "AWS S3",
      "Grafana",
      "Sentry",
      "gRPC",
      "Microservicios",
      "ChatGPT API",
      "Stripe",
      "Redsys",
    ],
  },
];
