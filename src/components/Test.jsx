import { useState } from "react";
import { CheckCircle, PlusCircle, AlertTriangle, Info } from "lucide-react";
import ToastrNotification from "./ToastrNotification";


const services = [
  {
    name: "Desarrollo Web",
    plans: [
      {
        name: "Básico",
        price: 0,
        features: ["Soporte 24/7", "Acceso a reportes", "Exportación de facturas"],
        extras: [],
      },
      {
        name: "Avanzado",
        price: 0,
        features: [
          "Soporte 24/7",
          "Acceso a reportes",
          "Exportación de facturas",
          "Integración con CRM",
        ],
        extras: [
          { name: "Integración con Blog", price: 50, description: "Añade una sección de blog integrada al sitio." },
          { name: "Personalización de branding", price: 30, description: "Colores, logos y estilos a tu medida." },
        ],
      },
    ],
  },
  {
    name: "Marketing Digital",
    plans: [
      {
        name: "Básico",
        price: 0,
        features: ["Gestión de redes sociales", "Publicidad en redes", "Análisis de tráfico"],
        extras: [],
      },
      {
        name: "Avanzado",
        price: 200,
        features: [
          "Gestión de redes sociales",
          "Publicidad en redes",
          "Análisis de tráfico",
          "SEO Avanzado",
        ],
        extras: [
          { name: "Automatización de recordatorios", price: 40, description: "Automatiza recordatorios para clientes." },
        ],
      },
    ],
  },
];


export default function Test() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedPlan, setSelectedPlan] = useState(selectedService.plans[0]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const { notifySuccess, notifyError, notifyInfo } = ToastrNotification();


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
      prev.includes(extra) ? prev.filter((item) => item !== extra) : [...prev, extra]
    );
  };

  const total = selectedPlan.price + selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 relative">
        <h2 className="text-4xl font-extrabold text-[#051d40] text-center mb-8">Estimador de Cotización</h2>

        {/* Sección de aviso */}
        <div className="mb-6 bg-yellow-100 p-4 rounded-xl border-l-4 border-yellow-500 flex flex-col gap-3 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600" size={24} />
            <div>
              <p className="text-yellow-800 font-semibold">Aviso importante:</p>
              <p className="text-yellow-700 text-sm">
                Esta cotización es solo un <strong>estimado</strong>. Para determinar el costo final, se requiere un análisis detallado de requisitos y necesidades específicas.
              </p>
            </div>
          </div>
        </div>


        <div className="mb-6">
          <label className="block text-lg font-semibold text-[#1460a6] mb-2">Selecciona un servicio</label>
          <select
           className="w-full p-4 border border-[#1460a6] rounded-xl bg-white text-[#051d40] font-semibold opacity-50 cursor-not-allowed"
            onChange={(e) => handleServiceChange(e.target.value)}
            value={services.indexOf(selectedService)}
            disabled
          >
            {services.map((service, index) => (
              <option key={index} value={index}>{service.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-[#1460a6] mb-2">Selecciona un plan</label>
          <select
            className="w-full p-4 border border-[#1460a6] rounded-xl bg-white text-[#051d40] font-semibold opacity-50 cursor-not-allowed"
            onChange={(e) => handlePlanChange(e.target.value)}
            value={selectedService.plans.indexOf(selectedPlan)}
            disabled
          >

            {selectedService.plans.map((plan, index) => (
              <option key={index} value={index}>{`${plan.name} - $${plan.price} USD`}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1460a6] mb-3">Características del Plan</h3>
          <div className="grid grid-cols-2 gap-4 text-[#051d40]">
            {selectedPlan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-[#289cd7]" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {selectedPlan.extras.length > 0 && (
          <div className="mb-6 bg-[#f5faff] p-5 rounded-xl shadow-inner border border-[#289cd7]">
            <h3 className="text-xl font-semibold text-[#1460a6] mb-3">Extras disponibles</h3>
            {selectedPlan.extras.map((extra, index) => (
              <div key={index} className="flex items-center justify-between text-[#051d40]">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-3"
                    onChange={() => toggleExtra(extra)}
                    checked={selectedExtras.includes(extra)}
                  />
                  {extra.name} (+${extra.price} USD)
                </label>

                {/* Contenedor del tooltip */}
                <div className="relative group flex items-center">
                  <Info className="text-[#1460a6] cursor-pointer" size={20} />
                  <span className="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 -top-12 bg-gray-900 text-white text-sm rounded-lg py-2 px-3 shadow-lg whitespace-nowrap transition-all duration-200 ease-in-out">
                    {extra.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}


        <div className="mt-6 text-lg font-bold text-[#051d40] bg-[#289cd7] p-5 rounded-2xl shadow-lg">
          <h3 className="text-white text-center text-2xl">Resumen de cotización</h3>
          <p className="text-white text-lg mt-3">Servicio: {selectedService.name}</p>
          <p className="text-white text-lg">Plan: {selectedPlan.name} - ${selectedPlan.price} USD</p>
          {selectedExtras.length > 0 && (
            <>
              <p className="mt-2 text-white font-semibold">Extras añadidos:</p>
              <ul className="list-disc pl-5 text-white">
                {selectedExtras.map((extra, index) => (
                  <li key={index}>{extra.name} (+${extra.price} USD)</li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-4 text-xl text-white font-extrabold">Total: ${total} USD</p>
        </div>

        <button onClick={() => notifyError("Esta funcion aun no esta disponible")} className="mt-6 w-full bg-[#1460a6] text-white font-semibold p-4 rounded-xl text-lg hover:bg-[#051d40] transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
          <PlusCircle />
          Generar Cotización
        </button>
      </div>
    </div>
  );
}
