import React from 'react';
import ButtonSvg from "../assets/svg/ButtonSvg";
import ToastrNotification from "./ToastrNotification";


const Button = ({ className, href, onClick, children, px, white, isSubmitting, activeForm = true }) => {
  const { notifyError } = ToastrNotification();

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`;
  const spanClasses = "relative z-10";

  const handleClick = (event) => {
    if (!activeForm) {
      notifyError("esta función está actualmente desactivada");
      event.preventDefault();
      return;
    }
    if (onClick) onClick(event);
  };

  const renderButton = () => (
    <button className={classes} onClick={handleClick} disabled={isSubmitting}>
      <span className={spanClasses}>
        {isSubmitting ? (
          <div className="loader border-t-transparent border-solid border-cyan-600 border-4 rounded-full w-4 h-4 animate-spin"></div>
        ) : (
          children
        )}
      </span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};


export default Button;
