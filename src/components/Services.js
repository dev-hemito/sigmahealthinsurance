import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaTimes } from 'react-icons/fa';

const insuranceServices = {
  "SBI General": {
    image: "/home.jpg",
    plans: [
      {
        title: "Arogya Supreme",
        description: "A solution for all your healthcare needs covering 20 basic covers and 8 optional covers.",
        features: [
          "Family coverage including dependent parents",
          "Entry age: 18-65 years (adults), 91 days-25 years (children)",
          "Air Ambulance coverage",
          "E-Opinion services"
        ]
      },
      {
        title: "Arogya Sanjeevani",
        description: "Comprehensive Health Insurance with affordable premium.",
        features: [
          "No medical check-up up to age 55",
          "5% Cumulative Bonus yearly",
          "Coverage: ₹50,000 to ₹10,00,000",
          "Life-long renewability"
        ]
      },
      {
        title: "Super Health",
        description: "Enhanced coverage beyond standard health insurance.",
        features: [
          "Sum insured: 5 Lacs to 4 Crores",
          "1/2/3 Years tenure options",
          "Individual and Family Floater policy",
          "No age limit for adults"
        ]
      }
    ]
  },
  "Care Health": {
    image: "/service.jpg",
    plans: [
      {
        title: "Care Supreme",
        description: "Premium health coverage with enhanced benefits.",
        features: [
          "600% increase in total coverage",
          "30% Discount on renewal",
          "Unlimited automatic recharge",
          "Unlimited E-consultation"
        ]
      },
      {
        title: "Care Freedom",
        description: "Comprehensive health coverage with minimal waiting periods.",
        features: [
          "2-year wait for pre-existing conditions",
          "Annual health check-up",
          "Automatic sum insured recharge",
          "Life-long renewability"
        ]
      }
    ]
  }
};

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/50 transition-opacity" />
        <div
          className="relative bg-white rounded-xl w-full max-w-4xl my-8"
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const ServicePlans = ({ service, plans, onClose }) => (
  <>
    <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center rounded-t-xl">
      <h2 className="text-2xl font-bold text-gray-800">{service}</h2>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <FaTimes className="w-6 h-6" />
      </button>
    </div>
    <div className="p-6 space-y-6">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-800">{plan.title}</h3>
          <p className="text-gray-600 mb-4">{plan.description}</p>
          <div className="space-y-2">
            {plan.features.map((feature, fidx) => (
              <div key={fidx} className="flex items-start space-x-2">
                <FaChevronRight className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

const ServiceCard = ({ title, image, onClick }) => (
  <div
    className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    onClick={onClick}
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg font-bold px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm">
          View Plans
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-center text-gray-800">{title}</h3>
    </div>
  </div>
);

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="pb-24 " id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Insurance Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(insuranceServices).map(([provider, data]) => (
            <ServiceCard
              key={provider}
              title={provider}
              image={data.image}
              onClick={() => setSelectedService(provider)}
            />
          ))}
        </div>

        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        >
          {selectedService && (
            <ServicePlans
              service={selectedService}
              plans={insuranceServices[selectedService].plans}
              onClose={() => setSelectedService(null)}
            />
          )}
        </Modal>
      </div>
    </section>
  );
};

export default ServicesSection;