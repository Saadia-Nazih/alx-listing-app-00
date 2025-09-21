

import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';


const Pill: React.FC<{ label: string; isActive?: boolean }> = ({ label, isActive }) => (
  <button
    className={`px-4 py-2 rounded-full border text-sm font-semibold
    ${isActive
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
      }`}
  >
    {label}
  </button>
);

const HomePage = () => {
  const filters = ['Top Villa', 'Self Checkin', 'Pool', 'Mountain View', 'Pet Friendly'];

  return (
    <div>
      {/* 1. SEZIONE HERO */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Trova il tuo posto preferito qui!</h1>
          <p className="mt-4 text-lg">I migliori prezzi per oltre 2 milioni di proprietà in tutto il mondo.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* 2. SEZIONE FILTRI */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <Pill key={index} label={filter} isActive={index === 0} />
            ))}
          </div>
        </section>

        {/* 3. SEZIONE ELENCO PROPRIETÀ */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Le nostre proprietà</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{property.name}</h3>
                  <p className="text-sm text-gray-600">{`${property.address.city}, ${property.address.country}`}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold text-blue-600">${property.price.toLocaleString()}</p>
                    <span className="text-yellow-500 font-bold">★ {property.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;