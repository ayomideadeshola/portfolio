import React from "react";
import { FaCode, FaShoppingCart, FaPaintBrush, FaCogs, FaWordpress, FaLaptopCode } from "react-icons/fa";
import AosEff from "./Aos";
import { useDarkMode } from "../../DarkModeContext";

const services = [
  { icon: <FaCode />, title: "Web Development", desc: "Creating responsive websites with the latest technologies." },
  { icon: <FaShoppingCart />, title: "E-Commerce Development", desc: "Custom e-commerce solutions tailored to your needs." },
  { icon: <FaPaintBrush />, title: "Website Design", desc: "Modern and clean UI/UX designs." },
  { icon: <FaCogs />, title: "Custom Web Dev", desc: "Tailored web applications for specific client needs." },
  { icon: <FaWordpress />, title: "CMS", desc: "Custom WordPress, Joomla, and more." },
  { icon: <FaLaptopCode />, title: "Web App Development", desc: "Modern web apps using powerful tools and frameworks." },
];

const Services = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      className={`py-16 px-6 max-w-7xl mx-auto transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <AosEff />
      <h2
        data-aos="zoom-in"
        className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${
          isDarkMode ? "text-orange-400" : "text-orange-600"
        }`}
      >
        What I Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            data-aos="fade-in"
            key={idx}
            className={`border backdrop-blur-md shadow-md p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? "bg-white/10 border-orange-500 text-white hover:shadow-orange-500/40"
                : "bg-white border-orange-400 text-black hover:shadow-orange-400/40"
            }`}
          >
            <div
              className={`text-3xl mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-orange-400" : "text-orange-600"
              }`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p
              className={`transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;