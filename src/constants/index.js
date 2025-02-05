import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import team1 from "../assets/team/pipe.jpg";
import team2 from "../assets/team/coca.jpg";
import team3 from "../assets/team/vane.jpg";


export const navigation = [
    {
        id: "0",
        title: "Inicio",
        url: null,
        to: "/",
        disabled: false,
    },
    {
        id: "1",
        title: "Acerca de",
        url: null,
        to: "/about-us",
        disabled: false,
    },
    {
        id: "2",
        title: "Cotización",
        url: null,
        to: "/calculate-estimate",
        disabled: false,
    },
    {
        id: "3",
        title: "Contacto",
        url: null,
        to: "/contact",
        disabled: false,
    },
    // {
    //   id: "5",
    //   title: "Registrarse",
    //   url: "#signup",
    //   onlyMobile: true,
    //   disabled: true,
    // },
    // {
    //   id: "6",
    //   title "Inicio de sesión",
    //   url: "#login",
    //   onlyMobile: true,
    //   disabled: true,
    // },
];

export const benefits = [
    {
        id: "1",
        title: "Desarrollo web.",
        text: null,
        hrefButton: "/coming-soon",
    },
    {
        id: "2",
        title: "Marketing.",
        text: null,
        hrefButton: "/coming-soon",
    },
    {
        id: "3",
        title: "Diseño gráfico.",
        text: null,
        hrefButton: "/coming-soon",
    },
    {
        id: "4",
        title: "Soporte Técnico.",
        text: null,
        hrefButton: "/coming-soon",
    },
    {
        id: "7",
        title: "Desarrollo de Software.",
        text: null,
        hrefButton: "/coming-soon",
    },
    {
        id: "8",
        title: "Telecomunicaciones.",
        text: null,
        hrefButton: "/coming-soon",

    },
];


export const socials = [

    {
        id: "1",
        title: "Linkedin",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/company/laurens-soluciones-tecnologica/",
    },
    {
        id: "2",
        title: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/laurenssoluciones?igsh=MTk1cXowcnNkOWZoeQ==",
    },
];

export const teamMembers = [
    {
        name: "Christofer Laurencio",
        role: "CEO & Founder",
        image: team1,
        social: { linkedin: "https://www.linkedin.com/in/christofer-laurencio-29abba258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/felicristofer?igsh=eGkzYmVvdG93aDhz&utm_source=qr" },
    },
    {
        name: "Jorge Luis Muñiz Coca",
        role: "CTO & Lead Developer",
        image: team2,
        social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
        name: "Vanessa Feliz",
        role: "Head of Marketing",
        image: team3,
        social: { linkedin: "https://www.linkedin.com/in/vanessa-feliz-digitalmarketer-socialmediadesigner?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/vanefh_27?utm_source=qr&igsh=YTMwYWV0Ymx4dnRl" },
    },
];

export const services = [
    {
        name: "Desarrollo Web (Páginas Web)",
        status: true,
        description:
            "Creación, diseño y mantenimiento de sitios web adaptados a las necesidades del cliente, con un diseño atractivo, responsivo y SEO básico.",
        plans: [
            {
                name: "Landing Page",
                price: 190,
                features: [
                    "4 o 6 secciones de contenido",
                    "Diseño atractivo y adaptado a tu marca",
                    "Llamados a la acción claros y estratégicos",
                    "Formulario de contacto",
                    "Velocidad de carga optimizada",
                    "Diseño Responsivo"
                ],
                extras: [
                ]
            },
            {
                name: " Página Web Informativa",
                price: 250,
                features: [
                    `Páginas como "Quiénes Somos," "Servicios," "Blog" y "Contacto."`,
                    "Diseño Responsivo",
                    "Mapas integrados y ubicaciones físicas",
                    "Sección de preguntas frecuentes (FAQ).",
                    "SEO Técnico",
                    "Blog para contenido informativo y SEO"
                ],
                extras: [
                    {
                        name: "CMS Intermedio",
                        price: 220,
                        description: "Gestiona tu sitio web con mayor flexibilidad y control: como controlar la informaciones del blog, servicios quieres somos y todo lo relacionado a la web",
                        status: false,
                        isComingSoon: true
                    }
                ]
            },
            {
                name: "Página Web Interactiva",
                price: 500,
                features: [
                    "Desarrollo UI/UX personalizado y atractivo",
                    "Soporte multilingüe y accesibilidad",
                    "Chats en vivo",
                    "Formularios dinámicos",
                    "Integración con redes sociales",
                    "CMS Intermedio",
                ],
                extras: [
                    {
                        name: "CMS Avanzado",
                        price: 700,
                        description: "Potencia tu presencia digital con un CMS avanzado: herramientas de marketing, personalización avanzada, autenticación de usuarios, control total del contenido y más.",
                        status: false,
                        isComingSoon: true
                    }
                ]
            },
            {
                name: "Tienda eCommerce",
                price: 5000,
                features: [
                    "Desarrollo UI/UX personalizado y atractivo",
                    "Soporte multilingüe y accesibilidad",
                    "Chats en vivo",
                    "Formularios dinámicos",
                    "Integración con redes sociales",
                    "Catálogo de productos con filtros y búsqueda avanzada",
                    "Integración con plataformas de pago seguras (PayPal, Stripe",
                    "Gestión de inventarios y stock en tiempo real",
                    "Dashboard de ventas y analítica",
                    "Multi tienda",
                    "HRM y CRM",
                ],
                extras: [
                ]
            },
            {
                name: "Tienda eCommerce (cms wix, shopify)",
                price: 450,
                features: [
                    "Diseño responsivo y personalizable",
                    "Gestión de catálogo de productos",
                    "Optimización SEO básica",
                    "Integración con redes sociales",
                    "Certificado SSL para seguridad en transacciones",
                    "Soporte para blogs y contenido promocional",
                    "Gestión de pedidos y envíos",
                    "Herramientas básicas de analítica"
                ],
                extras: [
                ]
            }
        ]
    },
    {
        name: "Publicidad",
        status: true,
        description: "Estrategias integrales de marketing digital y tradicional para impulsar marcas, mediante campañas publicitarias, gestión de redes sociales, email marketing, SEM y SEO.",
        plans: [
            {
                name: "Plan Basic",
                price: 280,
                features: [
                    "Plataformas: Meta Ads (anuncios con imagen)",
                    "Público objetivo: Intereses, ubicación, edad y género",
                    "Tipo de campaña: Alcance",
                    "Medición: Impresiones, clicks y alcance"
                ],
                extras: []
            },
            {
                name: "Plan Confort",
                price: 300,
                features: [
                    "Plataformas: Facebook Ads (anuncios con imagen y video), Google Ads (búsqueda y display)",
                    "Público objetivo: Intereses, ubicación, edad y género",
                    "Tipo de campaña: Alcance y conversión",
                    "Medición: Impresiones, clicks y conversiones"
                ],
                extras: []
            },
            {
                name: "Empresarial",
                price: 370,
                features: [
                    "Plataformas: Facebook Ads (anuncios con imagen, video y carrusel), Google Ads (búsqueda, display y video), LinkedIn Ads, Twitter Ads, Display & Video 360",
                    "Público objetivo: Intereses, ubicación, edad, género y comportamientos",
                    "Tipo de campaña: Alcance y conversión",
                    "Medición: Impresiones, clics, conversiones y CTR"
                ],
                extras: []
            }
        ]
    },
    {
        name: "Gestión de Redes Sociales",
        status: true,
        description:
            "Manejo profesional de redes sociales para potenciar la presencia digital de tu marca con estrategias de contenido, engagement y branding.",
        plans: [
            {
                name: "Plan Básico",
                price: 200,
                features: [
                    "Creación de calendario mensual, contenido básico",
                    "Responder comentarios en menos de 24h, moderación",
                    "Uso de Hootsuite/Buffer para programar",
                    "Evaluación de estrategias y oportunidades"
                ],
                extras: []
            },
            {
                name: "Plan Medio",
                price: 290,
                features: [
                    "Calendario con estrategia de engagement, diseño avanzado",
                    "Respuesta rápida (< 12h), campañas interactivas",
                    "Gestión con reportes detallados",
                    "Creación de newsletters, análisis de métricas",
                    "Evaluación de estrategias y oportunidades"
                ],
                extras: []
            },
            {
                name: "Plan Avanzado",
                price: 435,
                features: [
                    "Branding profesional, edición avanzada, interactividad",
                    "Monitorización constante (< 6h), fidelización",
                    "Software premium con automatización",
                    "Sesión de fotos y edición avanzada",
                    "Creación de newsletters, análisis de métricas",
                    "Evaluación de estrategias y oportunidades"
                ],
                extras: []
            }
        ]
    },
    {
        name: "Gestión de Redes Sociales + Publicidad Paga",
        status: true,
        description:
            "Estrategia integral que combina la gestión de redes sociales con campañas de publicidad pagada en diversas plataformas digitales.",
        plans: [
            {
                name: "Plan Básico",
                price: 480,
                features: [
                    "Creación de calendario mensual, contenido básico",
                    "Responder comentarios en menos de 24h, moderación",
                    "Uso de Hootsuite/Buffer para programar",
                    "Evaluación de estrategias y oportunidades",
                    "Publicidad paga: Meta Ads (anuncios con imagen)",
                    "Público objetivo: Intereses, ubicación, edad y género",
                    "Tipo de campaña: Alcance",
                    "Medición: Impresiones, clicks y alcance"
                ],
                extras: []
            },
            {
                name: "Plan Medio",
                price: 670,
                features: [
                    "Calendario con estrategia de engagement, diseño avanzado",
                    "Respuesta rápida (< 12h), campañas interactivas",
                    "Gestión con reportes detallados",
                    "Creación de newsletters, análisis de métricas",
                    "Evaluación de estrategias y oportunidades",
                    "Publicidad paga: Facebook Ads (imagen y video), Google Ads (búsqueda y display)",
                    "Público objetivo: Intereses, ubicación, edad y género",
                    "Tipo de campaña: Alcance y conversión",
                    "Medición: Impresiones, clicks y conversiones"
                ],
                extras: []
            },
            {
                name: "Plan Avanzado",
                price: 990,
                features: [
                    "Branding profesional, edición avanzada, interactividad",
                    "Monitorización constante (< 6h), fidelización",
                    "Software premium con automatización",
                    "Sesión de fotos y edición avanzada",
                    "Creación de newsletters, análisis de métricas",
                    "Evaluación de estrategias y oportunidades",
                    "Publicidad paga: Facebook Ads (imagen, video y carrusel), Google Ads (búsqueda, display y video), LinkedIn Ads, Twitter Ads, Display & Video 360",
                    "Público objetivo: Intereses, ubicación, edad, género y comportamientos",
                    "Tipo de campaña: Alcance y conversión",
                    "Medición: Impresiones, clics, conversiones y CTR"
                ],
                extras: []
            }
        ]
    },
    {
        name: "Diseño Gráfico",
        status: false,
        description:
            "Conceptualización y creación de materiales visuales que comunican la identidad y valores de la marca, desde logotipos hasta contenido publicitario.",
        plans: [
            {
                name: "Básico",
                price: 0,
                features: ["Diseño de Identidad Corporativa", "Diseño Publicitario"],
                extras: []
            },
            {
                name: "Avanzado",
                price: 150,
                features: ["Diseño Editorial", "Diseño de Interfaces (UI)", "Infografías"],
                extras: [
                    {
                        name: "Animación Gráfica",
                        price: 60,
                        description:
                            "Videos y efectos animados para enriquecer la comunicación visual"
                    }
                ]
            }
        ]
    },
    {
        name: "Soporte Técnico",
        status: false,
        description:
            "Asistencia técnica personalizada para resolver problemas de hardware, software y redes, con mantenimiento preventivo, correctivo y asistencia remota.",
        plans: [
            {
                name: "Básico",
                price: 0,
                features: [
                    "Mantenimiento Preventivo y Correctivo",
                    "Asistencia Remota"
                ],
                extras: []
            },
            {
                name: "Avanzado",
                price: 100,
                features: [
                    "Gestión de Redes",
                    "Instalación de Hardware y Software"
                ],
                extras: [
                    {
                        name: "Recuperación de Datos",
                        price: 40,
                        description: "Restauración de archivos y sistemas"
                    },
                    {
                        name: "Seguridad Informática",
                        price: 50,
                        description: "Medidas preventivas contra ciberamenazas"
                    }
                ]
            }
        ]
    },
    {
        name: "Asesorías de Gestión de Proyectos",
        status: false,
        description:
            "Optimización de la planificación y ejecución de proyectos mediante metodologías ágiles, análisis de riesgos, control de presupuestos y formación en herramientas de gestión.",
        plans: [
            {
                name: "Básico",
                price: 0,
                features: ["Análisis de Factibilidad", "Gestión de Cronogramas"],
                extras: []
            },
            {
                name: "Avanzado",
                price: 150,
                features: [
                    "Metodologías Ágiles",
                    "Control de Costos",
                    "Evaluación de Riesgos"
                ],
                extras: [
                    {
                        name: "Capacitación en Herramientas",
                        price: 60,
                        description:
                            "Formación en software como Trello, Jira o Asana"
                    }
                ]
            }
        ]
    },
    {
        name: "Desarrollo de Software",
        status: false,
        description:
            "Desarrollo a medida de software, desde aplicaciones móviles hasta plataformas empresariales, con análisis, diseño, programación, pruebas y mantenimiento continuo.",
        plans: [
            {
                name: "Básico",
                price: 0,
                features: ["Software Empresarial", "Aplicaciones Móviles"],
                extras: []
            },
            {
                name: "Avanzado",
                price: 300,
                features: [
                    "Sistemas de Gestión",
                    "Desarrollo de APIs",
                    "Pruebas y QA"
                ],
                extras: [
                    {
                        name: "Integración de Bases de Datos",
                        price: 70,
                        description:
                            "Optimización y diseño de sistemas de datos"
                    }
                ]
            }
        ]
    },
    {
        name: "Telecomunicaciones",
        status: false,
        description:
            "Diseño, instalación y mantenimiento de soluciones de telecomunicaciones, garantizando comunicación eficiente y segura a través de redes LAN/WAN, telefonía IP y videoconferencias.",
        plans: [
            {
                name: "Básico",
                price: 0,
                features: [
                    "Diseño de Redes de Comunicaciones",
                    "Telefonía IP"
                ],
                extras: []
            },
            {
                name: "Avanzado",
                price: 200,
                features: [
                    "Cableado Estructurado",
                    "Soluciones de Videoconferencia"
                ],
                extras: [
                    {
                        name: "Monitoreo de Redes",
                        price: 50,
                        description:
                            "Supervisión en tiempo real de infraestructuras"
                    },
                    {
                        name: "Optimización del Ancho de Banda",
                        price: 40,
                        description:
                            "Mejora de velocidades y conectividad"
                    }
                ]
            }
        ]
    }
];

