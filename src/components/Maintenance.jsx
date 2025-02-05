import { motion } from 'framer-motion';
import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoLaurens from "../assets/portfolio/logo-laurens.jpg";

export default function UnderConstruction() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#051d40] text-white p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#051d40] via-[#0c2b57] to-[#1460a6] opacity-60 animate-pulse" />

            {/* Logo Animado */}
            <motion.img
                src={logoLaurens}
                alt="Logo"
                className="relative z-10 w-32 md:w-40 rounded-full shadow-lg border-4 border-[#289cd7] bg-white p-2"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative text-center z-10 mt-4"
            >
                <p className="mt-4 text-lg text-[#ccd6db] max-w-lg mx-auto font-light">
                    Nuestra página está en construcción. Muy pronto, estará disponible este contenido.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
                className="mt-8 flex justify-center"
            >
                <Link to={"/"} className="relative flex items-center gap-3 bg-[#1460a6] hover:bg-[#289cd7] px-8 py-4 rounded-full text-white font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50">
                    <MoveLeft size={24} />
                    Inicio
                </Link>
            </motion.div>

            {/* Partículas animadas */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-50 blur-md"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: "-10vh", opacity: 1 }}
                        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}
                    />
                ))}
            </div>
        </div>
    );
}
