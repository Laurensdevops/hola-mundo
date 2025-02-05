import { useState } from "react";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import GlobalTooltip from "./GlobalTooltip";
import ContactForm from "./ContactForm";
import { useContactForm } from "../hooks/useContactForm";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import { services } from "../constants"


export default function CalculateEstimate() {
    const buildQuotationPayload = (payloadFromForm) => {
        return {
            name: payloadFromForm.name,
            email: payloadFromForm.email,
            phone: payloadFromForm.phone,
            details: payloadFromForm.details,
            quotation: {
                service: selectedService.name,
                plan: selectedPlan.name,
                planPrice: selectedPlan.price,
                extras: selectedExtras,
                total: total,
            },
            token: payloadFromForm.token,
        };
    };

    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedPlan, setSelectedPlan] = useState(selectedService.plans[0]);
    const [selectedExtras, setSelectedExtras] = useState([]);

    const {
        formData,
        errors,
        isSubmitting,
        submitted,
        handleChange,
        handleServiceChangeForm,
        handleReCAPTCHAChange,
        handleSubmit,
    } = useContactForm({
        apiEndpoint: "https://laurens-api.onrender.com/api/quotation",
        transformPayload: buildQuotationPayload,
    });

    const handleServiceChange = (index) => {
        const newService = services[Number(index)];
        setSelectedService(newService);
        setSelectedPlan(newService.plans[0]);
        setSelectedExtras([]);
    };

    const handlePlanChange = (index) => {
        const newPlan = selectedService.plans[Number(index)];
        setSelectedPlan(newPlan);
        setSelectedExtras([]);
    };

    const toggleExtra = (extra) => {
        setSelectedExtras((prev) =>
            prev.includes(extra)
                ? prev.filter((item) => item !== extra)
                : [...prev, extra]
        );
    };

    const total =
        selectedPlan.price +
        selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
    return (
        <>
            <Header />
            <Section crosses style={{ backgroundColor: "#fff" }}>
                <div className="flex mt-10 lg-mt-0 flex-col md:flex-row md:justify-center md:items-start gap-2 p-4">
                    <div className="w-full md:w-1/2 max-w-xl bg-gradient-to-br from-[#122b47] via-[#0c3e7a] to-[#021326] shadow-2xl rounded-3xl p-8">
                        <h2 className="text-4xl font-extrabold text--white text-center mb-8">
                            Estimador de Cotización
                        </h2>

                        {/* Sección de aviso */}
                        <div className="mb-6 bg-yellow-100 p-4 rounded-xl border-l-4 border-yellow-500 flex flex-col gap-3 shadow-sm">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="text-yellow-600" size={24} />
                                <div>
                                    <p className="text-yellow-800 font-semibold">
                                        Aviso importante:
                                    </p>
                                    <p className="text-yellow-700 text-sm">
                                        Esta cotización es solo un <strong>estimado</strong>. Para determinar el costo final, se requiere un análisis detallado de requisitos y necesidades específicas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Selección de servicio */}
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text--white mb-2">
                                Selecciona un servicio
                            </label>
                            <select
                                className="w-full p-4 border border-[#1460a6] rounded-xl bg-white text-[#051d40] font-semibold"
                                onChange={(e) => handleServiceChange(e.target.value)}
                                value={services.indexOf(selectedService)}
                            >
                                {services.map((service, index) => (
                                    <option
                                        key={index}
                                        value={index}
                                        disabled={!service.status}
                                    >
                                        {service.name} {!service.status && "(Próximamente)"}
                                    </option>
                                ))}
                            </select>
                        </div>


                        {/* Descripción del servicio */}
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text--white mb-2">
                                Descripción del Servicio
                            </label>
                            <p className="text-white">{selectedService.description}</p>
                        </div>

                        {/* Selección de plan */}
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text--white mb-2">
                                Selecciona un plan
                            </label>
                            <select
                                className="w-full p-4 border border-[#1460a6] rounded-xl bg-white text-[#051d40] font-semibold"
                                onChange={(e) => handlePlanChange(e.target.value)}
                                value={selectedService.plans.indexOf(selectedPlan)}
                            >
                                {selectedService.plans.map((plan, index) => (
                                    <option key={index} value={index}>
                                        {`${plan.name} - $${plan.price} USD`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Características del plan */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text--white mb-3">
                                Características del Plan
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-[#fff]">
                                {selectedPlan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="text-[#289cd7] shrink-0" size={20} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Extras disponibles */}
                        {selectedPlan.extras.length > 0 && (
                            <div className="mb-6 bg-[#f5faff] p-5 rounded-xl shadow-inner border border-[#289cd7]">
                                <h3 className="text-xl font-semibold text-[#000] mb-3">
                                    Extras disponibles
                                </h3>
                                {selectedPlan.extras.map((extra, index) => (
                                    <div key={index} className="flex items-center justify-between text-[#051d40]">
                                        <label
                                            className={`flex items-center ${!extra.status ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                className="mr-3"
                                                onChange={() => toggleExtra(extra)}
                                                checked={selectedExtras.includes(extra)}
                                                disabled={!extra.status}
                                            />
                                            {extra.name} (+${extra.price} USD)
                                            {extra.isComingSoon && (
                                                <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                                                    Próximamente
                                                </span>
                                            )}
                                        </label>
                                        <GlobalTooltip content={extra.description}>
                                            <div>
                                                <Info className="text-[#1460a6] cursor-pointer" size={20} />
                                            </div>
                                        </GlobalTooltip>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Resumen de cotización */}
                        <div className="mt-6 text-lg font-bold text-[#051d40] bg-[#289cd7] p-5 rounded-2xl shadow-lg">
                            <h3 className="text-white text-center text-2xl">
                                Resumen de cotización
                            </h3>
                            <p className="text-white text-lg mt-3">
                                Servicio: {selectedService.name}
                            </p>
                            <p className="text-white text-lg">
                                Plan: {selectedPlan.name} - ${selectedPlan.price} USD
                            </p>
                            {selectedExtras.length > 0 && (
                                <>
                                    <p className="mt-2 text-white font-semibold">
                                        Extras añadidos:
                                    </p>
                                    <ul className="list-disc pl-5 text-white">
                                        {selectedExtras.map((extra, index) => (
                                            <li key={index}>
                                                {extra.name} (+${extra.price} USD)
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <p className="mt-4 text-xl text-white font-extrabold">
                                Total: ${total} USD
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 max-w-xl bg-gradient-to-br from-[#122b47] via-[#0c3e7a] to-[#021326] shadow-2xl rounded-3xl p-8">
                        <ContactForm
                            formData={formData}
                            errors={errors}
                            isSubmitting={isSubmitting}
                            submitted={submitted}
                            handleChange={handleChange}
                            handleServiceChangeForm={handleServiceChangeForm}
                            handleReCAPTCHAChange={handleReCAPTCHAChange}
                            handleSubmit={handleSubmit}
                            showServiceSelector={false}
                            textForFormButton="Enviar Cotización"
                            activeForm={true}
                        />
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}
