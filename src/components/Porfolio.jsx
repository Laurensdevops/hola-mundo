import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Benefits from "./Benefits";
import { fumiCosmos, sfBoat, laurensLogo, economycaIcon, CristalIa } from "../assets";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const projects = [
    {
      id: 1,
      category: "Web",
      title: "Fumicosmos",
      text: "Empresa de control de plagas",
      image: "https://via.placeholder.com/300x200",
      iconUrl: fumiCosmos,
      isViewsLink: true,
      hrefButton: "https://fumicosmos.com",
      buttonText: "Ver demo",

    },
    {
      id: 2,
      category: "Web",
      title: "SF INTERIOR",
      text: "Empresa de diseño de interiores de barcos, y mantenimiento.",
      image: "https://via.placeholder.com/300x200",
      iconUrl: sfBoat,
      isViewsLink: true,

      hrefButton: "https://shimmering-dolphin-8e7015.netlify.app",
      buttonText: "Ver demo",
    },
    {
      id: 3,
      category: "Web",
      title: "economyca",
      text: "Somos una firma de consultoría especializada que suple soluciones a necesidades para toma de decisiones estratégicas y ejecución de proyectos del sector público, el sector privado e iniciativas conjuntas.",
      image: "https://via.placeholder.com/300x200",
      iconUrl: economycaIcon,
      isViewsLink: true,

      hrefButton: "https://www.economyca.com.do/",
      buttonText: "Ver demo",
    },
    {
      id: 4,
      category: "Plantilla",
      title: "Laurens juice",
      text: "Plantilla desarrollado con fines demostrativo.",
      image: "https://via.placeholder.com/300x200",
      iconUrl: laurensLogo,
      isViewsLink: true,
      hrefButton: "https://gregarious-monstera-24cf78.netlify.app/",
      buttonText: "Ver demo",
    },
    {
      id: 5,
      category: "Plantilla",
      title: "Laurens Salon",
      text: "Plantilla desarrollado con fines demostrativo.",
      image: "https://via.placeholder.com/300x200",
      iconUrl: laurensLogo,
      isViewsLink: true,
      hrefButton: "https://dashing-lebkuchen-716af1.netlify.app/",
      buttonText: "Ver demo",
    },
    {
      id: 6,
      category: "Plantilla",
      title: "Laurens Agencia",
      text: "Plantilla desarrollado con fines demostrativo.",
      image: "https://via.placeholder.com/300x200",
      iconUrl: laurensLogo,
      isViewsLink: true,
      hrefButton: "https://graceful-frangipane-f56c52.netlify.app/",
      buttonText: "Ver demo",
    },
    {
      id: 7,
      category: "Web",
      title: "CRYSTAL IA",
      text: "Crystal AI Technology combina innovación y excelencia para ofrecer soluciones tecnológicas y estratégicas que impulsan el éxito de empresas y gobiernos. Integramos tecnología avanzada con estrategias sostenibles para potenciar el desarrollo y la eficiencia.",
      image: "https://via.placeholder.com/300x200",
      iconUrl: CristalIa,
      isViewsLink: true,
      hrefButton: "https://willowy-dolphin-a5ec3f.netlify.app/",
      buttonText: "Ver demo",
    },
  ];

  const categories = ["Todos", "Plantilla", "Diseño", "Marketing", "Web"];

  // Filtrar proyectos por categoría seleccionada
  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Section crosses id="portfolio">
      <div className="container relative z-2 text-[#1460a6]">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Portafolio" />
        <p className="text-center text-[#1460a6] mt-2">
          Nuestros proyectos desarrollados hasta el momento
        </p>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                borderColor: '#289CD7',
                borderWidth: '2px',
                borderStyle: 'solid',
              }}
              className={`py-2 px-4 rounded whitespace-nowrap ${
                selectedCategory === category ? "bg-[#1460a6] text-white" : "text-[#1460a6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Proyectos */}
        <div className="flex flex-wrap justify-center mb-10 mt-8">
          {filteredProjects.length > 0 ? (
            <Benefits items={filteredProjects} />
          ) : (
            <div className="text-center text-whitew-full">
              <p>No tenemos proyectos aun en esta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
