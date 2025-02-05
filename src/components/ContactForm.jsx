import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "./Button";
import SelectMultiple from "./SelectMultiple";

const ContactForm = ({
    formData,
    errors,
    isSubmitting,
    submitted,
    handleChange,
    handleServiceChangeForm,
    handleReCAPTCHAChange,
    handleSubmit,
    showServiceSelector = true,
    textForFormButton = "Enviar",
    activeForm = true

}) => {
    return (
        <form onSubmit={handleSubmit}>
            <ContactInputBox
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                isValid={!errors.name}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}*</span>}

            <ContactInputBox
                type="text"
                name="email"
                placeholder="Correo"
                value={formData.email}
                onChange={handleChange}
                isValid={!errors.email}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}*</span>}

            <ContactInputBox
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                isValid={!errors.phone}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}*</span>}

            {showServiceSelector && (
                <>
                    <SelectMultiple
                        value={formData.contact_Subject}
                        onChange={handleServiceChangeForm}
                        isValid={!errors.contact_Subject}
                    />
                    {errors.contact_Subject && <span className="text-red-500 text-sm">{errors.contact_Subject}*</span>}
                </>
            )}

            <ContactTextArea
                row="6"
                name="details"
                placeholder="Mensaje"
                value={formData.details}
                onChange={handleChange}
                isValid={!errors.details}
            />
            {errors.details && <span className="text-red-500 text-sm">{errors.details}*</span>}

            <Button className="w-full mb-4" white isSubmitting={isSubmitting} activeForm={activeForm}>
                {textForFormButton}
            </Button>
            <ReCAPTCHA
                sitekey="6LeWS8UqAAAAAA6w_8lEwLsbMvnRv43dFGUjLE3-"
                onChange={handleReCAPTCHAChange}
            />
            {submitted && (
                <p className="mt-4 text-green-500">
                    ¡Gracias! Tus datos fueron registrados, te estaremos contactando lo más pronto posible.
                </p>
            )}
        </form>
    );
};

export default ContactForm;

const ContactTextArea = ({ row, placeholder, name, value, onChange, isValid }) => {
    return (
        <div className="mb-2">
            <textarea
                rows={row}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full resize-none bg-transparent border-b-2 px-[14px] py-3 text-base text-body-color outline-none 
                    ${isValid === false ? 'border-red-500' : 'border-stroke focus:border-primary'} 
                    dark:border-dark-3 dark:text-dark-6`}
            />
        </div>
    );
};


const ContactInputBox = ({ type, placeholder, name, value, onChange, isValid }) => {
    return (
        <div className="mb-6">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full bg-transparent border-stroke border-b-2 px-[14px] py-3 text-base text-body-color outline-none 
                    ${isValid === false ? "border-red-500" : "focus:border-primary"} 
                    dark:border-dark-3 dark:text-dark-6`}
            />
        </div>
    );
};
