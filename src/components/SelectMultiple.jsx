import React from 'react';

const SelectMultiple = ({ value, onChange, isValid }) => {
  const truncateValue = (value, maxLength) => {
    return value.length > maxLength ? value.slice(0, maxLength) + '...' : value;
  };

  return (
    <div>
      <div className="relative mb-6">
        <div
          className={`block appearance-none w-full bg-transparent text-gray-400 border-b-2 py-3 px-3 leading-tight focus:outline-none ${
            isValid === false ? 'border-red-500' : 'border-gray-300 focus:border-primary'
          }`}
        >
          {truncateValue(value || 'Tema de contacto', 30)}
        </div>
        <select
          value={value}
          onChange={onChange}
          className="absolute inset-0 opacity-0 w-full h-full"
        >
          <option disabled value="">
            Tema de contacto
          </option>
          <option value="Consulta de presupuestos.">
            Consulta de presupuestos.
          </option>
          <option value="Soporte técnico.">
            Soporte técnico.
          </option>
          <option value="Información sobre servicios.">
            Información sobre servicios.
          </option>
          <option value="Sugerencias y comentarios.">
            Sugerencias y comentarios.
          </option>
          <option value="Otros.">
            Otros.
          </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectMultiple;
