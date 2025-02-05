import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" style={{ backgroundColor: "#289cd7" }}>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* Texto del footer con color oscuro */}
        <p className="caption text-[#1460a6] lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Lista de redes sociales */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-white bg-[#1460a6] rounded-full transition-colors hover:bg-[#051d40] text-2xl"
            >
              {React.createElement(item.icon)}
            </a>
          ))}
        </ul>

      </div>
    </Section>
  );
};

export default Footer;
