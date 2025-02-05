import Heading from "./Heading";
import { ArrowUpRight, Eye, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Benefits = ({ items = [], title = "", isService = false }) => {
  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };
  const content = (
    <div className="">
      {title && <Heading className="md:max-w-md lg:max-w-2xl" title={title} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative my-4 m-0 lg:m-4 w-[350px] max-[360px]:w-[320px] h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#122b47] via-[#0c3e7a] to-[#021326] border-2 border-[#ccd6db] transition-transform duration-300 ease-in-out"
          >
            <div className="absolute inset-0 bg-cover bg-center brightness-75 hover:brightness-100 transition-all duration-500 filter blur-sm hover:blur-none scale-110 hover:scale-100 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-t from-[#021326] via-transparent to-transparent"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#ccd6db]/20 via-transparent to-[#ccd6db]/20 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t border-[#ccd6db] opacity-10 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-[#289cd7]/25 animate-ping"></div>
            <div className="absolute top-12 left-12 w-10 h-10 rounded-full bg-[#ccd6db]/25 animate-pulse"></div>
            <div className="absolute bottom-6 right-10 w-6 h-6 rounded-full bg-[#ccd6db]/30 animate-fadeIn"></div>

            <div className="absolute bottom-16 left-8 right-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#ccd6db] shadow-md">
                {isService ? (
                 <div className="flex items-center justify-center h-full">  <Trophy className="text-[#289cd7] w-10 h-10"></Trophy> </div>
                ) : <img src={item.iconUrl} alt="Furnace Icon" className="w-full h-full object-cover" />}
              </div>

              <h3 className="text-[#ffffff] font-extrabold text-3xl tracking-wide drop-shadow-lg animate-fadeIn">
                {item.title}
              </h3>

              <p className="text-[#ccd6db] text-lg max-w-[85%] leading-relaxed font-light">
                {truncateText(item.text, 105)}
              </p>
            </div>


            <Link to={item.hrefButton} className="absolute bottom-0 right-0">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer w-[75px] h-[75px] bg-[#289cd7] flex items-center justify-center rounded-tl-3xl shadow-2xl hover:shadow-3xl transition-transform duration-300 before:absolute before:w-24 before:h-24 before:rounded-full before:bg-[#289cd7]/30 before:animate-ping"
              >
                {item.isViewsLink ? (<Eye className="text-white w-10 h-10"/>) : (
                  <ArrowUpRight className="text-white w-10 h-10" />
                )}
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (content)
};

export default Benefits;
