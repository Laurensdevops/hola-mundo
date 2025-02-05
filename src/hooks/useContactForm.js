// src/hooks/useContactForm.js
import { useState } from "react";
import ToastrNotification from "../components/ToastrNotification";

export const useContactForm = ({ apiEndpoint, transformPayload }) => {
  const { notifySuccess, notifyError, notifyInfo } = ToastrNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    contact_Subject: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [errors, setErrors] = useState({
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChangeForm = (e) => {
    setFormData((prev) => ({ ...prev, contact_Subject: e.target.value }));
  };

  const handleReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!recaptchaToken) {
      notifyInfo("Por favor, completa el reCAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    let payload = { ...formData, token: recaptchaToken };

    // Si se provee la función transformPayload, la aplicamos para modificar el objeto
    if (transformPayload && typeof transformPayload === "function") {
      payload = transformPayload(payload);
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        notifySuccess("Gracias por contactarnos. Te responderemos pronto.");
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          details: "",
          service: "",
        });
        setRecaptchaToken(null);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setErrors(errorData.errors);
        } else {
          notifyError(errorData.message || "Error al enviar");
        }
      }
    } catch (err) {
      notifyError("Error de conexión con el servidor. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitted,
    handleChange,
    handleServiceChangeForm,
    handleReCAPTCHAChange,
    handleSubmit,
  };
};
