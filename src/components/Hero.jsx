import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#289cd7] via-[#1460a6] to-[#051d40] text-white overflow-hidden">
      
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-[#ccd6db] opacity-30 rounded-full"
          style={{ width: particle.size, height: particle.size, top: particle.y, left: particle.x }}
          animate={{ y: [particle.y, particle.y - 120], opacity: [1, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity, repeatType: "reverse", delay: particle.delay }}
        />
      ))}

      <motion.div 
        className="absolute top-16 left-16 w-80 h-80 bg-[#ccd6db] opacity-10 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-72 h-72 bg-[#289cd7] opacity-20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Content */}
      <div className="text-center px-6 md:px-12">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#ccd6db] to-[#289cd7]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Descubre el <span className="text-[#ccd6db]">Futuro Digital</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mt-4 text-gray-200 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Innovación, tecnología y creatividad en un solo espacio.
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Link to="/calculate-estimate" className="bg-gradient-to-r from-[#289cd7] to-[#1460a6] px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Comenzar
          </Link>
          <Link to={"/contact"} className="border border-[#ccd6db] bg-white/10 px-8 py-3 text-lg font-semibold rounded-full shadow-xl backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:text-[#ffffff] hover:scale-105">
            Saber Más
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
