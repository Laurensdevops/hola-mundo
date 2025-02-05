import Benefits from "./components/Benefits";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Porfolio from "./components/Porfolio";
import { benefits } from "./constants";
import Heading from "./components/Heading";
import ToastrNotification from "./components/ToastrNotification";
import { useEffect } from "react";


export const App = () => {
  const { notifyInfo } = ToastrNotification();
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setTimeout(() => {
        notifyInfo("¡Hola! Bienvenido a nuestro sitio web.", "bottom-right");;
      }, 3000);
      setTimeout(() => {
        notifyInfo("Si tienes alguna duda, no dudes en contactarnos.", "bottom-right");
      }, 6000);
      setTimeout(() => {
        notifyInfo("Puede presentar problemas, por favor tener paciencia estamos trabajando en ello.", "bottom-right");
      }, 9000);

      localStorage.setItem("hasVisited", "true");
    }
  }, []);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Section crosses>
          <div className="container relative z-2 text-white">
            <Heading className="md:max-w-md lg:max-w-2xl" title="Servicios" />

            <div className="flex flex-wrap justify-center">
              <Benefits items={benefits} isService={true} />
            </div>
          </div>
        </Section>
        <Porfolio />
        <Footer />
      </div>
    </>
  );
};


