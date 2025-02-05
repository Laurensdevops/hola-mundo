import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
import laurens from "../assets/portfolio/logo-laurens.jpg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Section from "./Section";
import { teamMembers } from "../constants";  


export const About = () => {
  return (
    <>
      <Header />
      <Section crosses>
        <section className="relative backgroud bg-white text-white py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
          {/* Fondo dinámico */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-1/3 w-60 h-60 sm:w-80 sm:h-80 bg-blue-400 opacity-20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-400 opacity-20 blur-[100px] rounded-full animate-pulse"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Título Principal */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl font-bold text-center text-[#33bdeb] mb-12 tracking-wide"
            >
              Sobre Nosotros
            </motion.h2>

            {/* Sección Principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Imagen con efecto hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-lg border-4 border-blue-500/50 overflow-hidden"
              >
                <img
                  src={laurens}
                  alt="laurens"
                  className="rounded-3xl w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Texto con efecto Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-lg border border-white/20 text-center"
              >
                <p className="text-lg sm:text-xl leading-relaxed text-[#33bdeb] font-light">
                  Somos una empresa comprometida con la innovación y la excelencia. Nuestro objetivo es brindar soluciones eficientes y efectivas a nuestros clientes.
                </p>
              </motion.div>
            </div>

            {/* Misión, Visión y Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                { title: "Misión", text: "Ofrecer servicios de alta calidad en gestión documental.", delay: 0 },
                { title: "Visión", text: "Ser líderes en soluciones tecnológicas a nivel internacional.", delay: 0.2 },
                { title: "Valores", text: "Responsabilidad, Honestidad, Compromiso, Confianza.", delay: 0.4 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: item.delay }}
                  className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-lg border border-white/20 text-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#33bdeb]">{item.title}</h3>
                  <p className="mt-4 text-[#33bdeb] font-light">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Team Section */}
            <section className="relative text-white py-20">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl font-bold text-[#33bdeb] mb-12 text-center"
              >
                Nuestro Equipo
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="relative group rounded-3xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md hover:shadow-xl transition duration-300"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                      <p className="text-sm sm:text-base font-bold text-[#33bdeb]">{member.role}</p>

                      <div className="mt-4 flex gap-4">
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-white text-xl sm:text-2xl hover:text-[#33bdeb] transition duration-300" />
                        </a>
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                          <FaInstagram className="text-white text-xl sm:text-2xl hover:text-[#33bdeb] transition duration-300" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </Section>
      <Footer />
    </>
  );
};
