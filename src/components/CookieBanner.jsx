import React, { useState, useEffect } from "react";

const CookieBanner = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-[#051d40] text-[#ccd6db] py-4 px-4 text-center z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="mb-4 sm:mb-0 text-sm">
          Utilizamos cookies para mejorar la experiencia y analizar el tráfico. Al continuar navegando, aceptas el uso de cookies.{" "}
          <a 
            href="/politica-de-cookies" 
            className="underline text-[#289cd7] hover:text-[#1460a6] transition-colors duration-300"
          >
            Más información
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-[#289cd7] hover:bg-[#1460a6] text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
