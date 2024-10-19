import { Project } from "@/entities/Project";

export const personalProjects: Project[] = [
  {
    title: "Portafolio",
    description: "Portafolio personal desarrollado con React y Tailwind CSS.",
    image: "/project/portafolio.png",
    status: "Completed",
    technologies: ["React", "Tailwind CSS", "Typescript", "Cloudfare Pages"],
    links: [
      {
        type: "web",
        url: "https://raul.tejeda.contact",
      },
      {
        type: "github",
        url: "https://github.com/xFingerDev/MyPortafolio",
      },
    ],
  },
  {
    title: "AdVerse DashBoard",
    status: "In Progress",
    description:
      "Aplicación móvil que permite a los usuarios consultar las estadísticas de ingresos generados en múltiples networks, como AdMob y Unity Ads.",
    image: "/project/adverse.png",
    technologies: [
      "React Native",
      "Expo",
      "React Native UI Kitten",
      "React Native Reanimated",
      "Google Api",
    ],
    links: [
      {
        type: "gplay",
        url: "https://play.google.com/store/apps/details?id=com.communitybakery.adverse",
      },
      {
        type: "github",
        url: "https://github.com/xFingerDev/AdVerse-Dashboard",
      },
    ],
  },
  {
    title: "MeronPan",
    status: "In Progress",
    description:
      "Aplicación móvil para seguir tus animes favoritos con calendario estacional, búsqueda rápida y notificaciones push para nuevos episodios. Desarrollada en Flutter, con backend propio y scraping de datos automatizado.",
    image: "/project/meronpan.png",
    technologies: [
      "Fastify",
      "PostgreSQL",
      "TypeScript",
      "Flutter",
      "GraphQL (Client)",
      "Firebase Push Notifications",
      "Redis",
      "Docker",
      "Firebase",
      "Scraping",
    ],
    links: [
      {
        type: "gplay",
        url: "https://play.google.com/store/apps/details?id=com.communitybakery.meronpan",
      },
    ],
  },
  {
    title: "FillerHub",
    status: "Completed",
    description:
      "Aplicación móvil para identificar rápidamente episodios de relleno en tus animes favoritos. Desarrollada en Flutter, con backend propio y scraping de datos automatizado para mantener la información siempre actualizada.",
    image: "/project/fillerhub.png",
    technologies: [
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Flutter",
      "Scraping",
      "Docker",
    ],
    links: [
      {
        type: "gplay",
        url: "https://play.google.com/store/apps/details?id=com.communitybakery.fillerhub",
      },
    ],
  },
  {
    title: "Brújula Cuenca",
    status: "Completed",
    description:
      "Aplicación móvil de brújula que en lugar de apuntar al norte, señala siempre hacia Cuenca. Hecha con Flutter, porque todas las rutas llevan a Cuenca.",
    image: "/project/cuenca.png",
    technologies: ["Flutter"],
    links: [
      {
        type: "gplay",
        url: "https://play.google.com/store/apps/details?id=com.communitybakery.whereiscuenca",
      },
    ],
  },
  {
    title: "wAnime",
    status: "Completed",
    description:
      "Versión no oficial de Trace.moe que te permite identificar al instante de qué anime es cualquier imagen o captura. Sube una imagen y obtén el nombre del anime y el episodio en segundos. Incluye historial de búsqueda y una interfaz sencilla e intuitiva.",
    image: "/project/wanime.png",
    technologies: [
      "React Native",
      "NativeWind",
      "TypeScript",
      "GraphQL (Client)",
    ],
    links: [
      {
        type: "gplay",
        url: "https://play.google.com/store/apps/details?id=com.communitybakery.wanime",
      },
      {
        type: "github",
        url: "https://github.com/xFingerDev/wAnime",
      },
    ],
  },
  {
    title: "Hyenso",
    status: "In Progress",
    description:
      "Aplicación web minimalista para guardar y compartir contenido en Markdown, con cifrado de extremo a extremo y enfoque en la simplicidad y privacidad.",
    image: "/project/hyenso.png",
    technologies: [
      "React",
      "shadcn-ui",
      "TailWind CSS",
      "Cloudfare Pages",
      "TypeScript",
      "Markdown",

      "Fastify",
      "JWT",
      "Redis",
      "PostgreSQL",
    ],
    links: [
      {
        type: "web",
        url: "https://hyenso.com",
      },
    ],
  },
  {
    title: "Jishu",
    status: "Completed",
    description:
      "Plataforma web minimalista estilo adf.ly que paga por clic. Ofrece analíticas detalladas de visitantes, seguridad reforzada y sistema de espera imposible de saltar gracias a tokens de un solo uso por usuario.",
    image: "/project/jishu.png",
    technologies: [
      "React",
      "shadcn-ui",
      "TailWind CSS",
      "Cloudfare Pages",
      "TypeScript",

      "Fastify",
      "JWT",
      "Redis",
      "PostgreSQL",
      "BullMQ",
      "IP Geolocation",
    ],
    links: [
      {
        type: "web",
        url: "https://jishu.click",
      },
    ],
  },
  {
    title: "EzStreaming",
    status: "Completed",
    description:
      "Software de streaming desarrollado con .NET y Python, diseñado para gestionar múltiples transmisiones simultáneas. Incluye integración con un bot de Discord para controlar y administrar los canales directamente desde el chat.",
    image: "/project/ezstreaming.png",
    technologies: [
      ".Net",
      "Python",
      "Discord Bot",
      "C#",
      "Material Design Themes",
      "FFmpeg",
      "Bash",
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/xFingerDev/EzStreamig",
      },
    ],
  },
  {
    title: "Pixy",
    status: "On Hold",
    description:
      "Aplicación de pixel art escrita en C++, con estilo áspero y estética simple. Diseñada para funcionar en equipos de bajos recursos y completamente open source. (En desarrollo)",
    image: "/project/pixy.png",
    technologies: ["C++", "OpenGL", "GLFW", "Imgui"],
    links: [
      {
        type: "github",
        url: "https://github.com/xFingerDev/Pixy",
      },
    ],
  },
];
