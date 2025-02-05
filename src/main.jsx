import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { App } from "./App.jsx";
import "./index.css";
import { About } from "./components/About.jsx";
import UnderConstruction from "./components/Maintenance.jsx";
import { Contact } from "./components/Contact.jsx";
import CalculateEstimate from "./components/CalculateEstimate.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import { loadGoogleAnalytics, loadGTM, loadReCaptcha } from "./utils/loadScripts";
import { loadGTMNoscript} from "./utils/loadGTMNoscript.js";

const Root = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setCookieConsent(true);
      loadGoogleAnalytics();
      loadGTM();
      loadReCaptcha();
      loadGTMNoscript()
    }
  }, []);

  const handleConsentAccept = () => {
    setCookieConsent(true);
    localStorage.setItem("cookieConsent", "true");
    loadGoogleAnalytics();
    loadGTM();
    loadReCaptcha();
  };

  return (
    <Router>
      {!cookieConsent && <CookieBanner onAccept={handleConsentAccept} />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/calculate-estimate" element={<CalculateEstimate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<UnderConstruction />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
