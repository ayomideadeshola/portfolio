import React, { useEffect, useState } from "react";
import profileImage from "../assets/profileeng.jpg";
import { FaArrowAltCircleUp } from "react-icons/fa";
import AosEff from "./Aos";
import Services from "./Service";
import { useDarkMode } from "../../DarkModeContext";

const Home = () => {
  const { isDarkMode } = useDarkMode();
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const fullText = "I'm a fullstack developer";

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(fullText.slice(0, index + 1));
          setIndex(index + 1);
          if (index + 1 === fullText.length) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setTypedText(fullText.slice(0, index - 1));
          setIndex(index - 1);
          if (index - 1 === 0) {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progressData = [
    { skill: "HTML", value: 95 },
    { skill: "CSS", value: 90 },
    { skill: "BOOTSTRAP", value: 85 },
    { skill: "TAILWIND CSS", value: 90 },
    { skill: "JAVASCRIPT", value: 85 },
    { skill: "REACT.JS", value: 85 },
    { skill: "NODE.JS", value: 85 },
    { skill: "ANGULAR.JS", value: 75 },
    { skill: "PHP", value: 75 },
    { skill: "NEXT.JS", value: 85 },
    { skill: "LARAVEL", value: 85 },
    { skill: "VUE", value: 85 },
    { skill: "JAVA/C++", value: 70 },
    { skill: "DATABASE MGMT", value: 85 },
  ];

  return (
    <>
      <AosEff />

      <header
        className={`flex flex-col items-center text-center py-32 px-6 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-black via-gray-800 to-orange-800 text-white"
            : "bg-gradient-to-br from-white via-gray-100 to-orange-100 text-black"
        }`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDarkMode ? "bg-black/40" : "bg-white/30"
          }`}
        />
        <img
          src={profileImage}
          alt="Profile"
          className={`md:w-60 sm:w-52 w-48 md:h-60 h-48 sm:h-52 rounded-full object-cover mb-6 border-4 shadow-lg rotate-12 transition-colors duration-300 ${
            isDarkMode ? "border-orange-500" : "border-orange-400"
          }`}
        />
        <h1
          data-aos="zoom-in"
          className={`text-3xl sm:text-4xl md:text-5xl font-bold transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Adeshola Ayomide
        </h1>
        <p
          className={`mt-2 text-lg transition-colors duration-300 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        <div data-aos="fade-in" className="flex gap-4 mt-6">
          <a
            data-aos="fade-in"
            href="https://github.com/josephadeshola"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              isDarkMode
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-orange-400 text-gray-900 hover:bg-orange-300"
            }`}
          >
            GitHub Repo
          </a>
          <a
            data-aos="fade-up"
            href="/project"
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            View Projects
          </a>
        </div>
      </header>

      <section
        className={`max-w-5xl mx-auto px-6 py-10 transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <div
          className={`p-6 rounded-xl outline outline-orange-500 outline-dashed mb-10 transition-colors duration-300 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <p data-aos="zoom-out" className="text-lg leading-relaxed">
            I'm a passionate fullstack developer skilled in creating robust and
            scalable web applications. I specialize in technologies like React,
            Node.js, Next.js, MongoDB, and Tailwind CSS. I enjoy building
            user-friendly interfaces, writing clean and maintainable code, and
            solving real-world problems through technology. Whether working on
            the frontend or backend, I strive to deliver high-quality solutions
            that meet users' needs and business goals.
          </p>
        </div>

        <div>
          <h2
            data-aos="fade-in"
            className={`text-3xl font-bold mb-6 text-center transition-colors duration-300 ${
              isDarkMode ? "text-orange-400" : "text-orange-600"
            }`}
          >
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {progressData.map((item, index) => (
              <div
                data-aos="zoom-in"
                key={index}
                className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span>{item.value}%</span>
                </div>
                <div
                  className={`w-full rounded-full h-3 transition-colors duration-300 ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`h-3 rounded-full transition-all duration-500 transition-colors duration-300 ${
                      isDarkMode ? "bg-orange-500" : "bg-orange-400"
                    }`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Services />

      {showScroll && (
        <button
          className={`fixed bottom-5 right-5 text-4xl z-50 transition-colors duration-300 ${
            isDarkMode ? "text-orange-500 hover:text-orange-700" : "text-orange-400 hover:text-orange-600"
          }`}
          onClick={scrollToTop}
        >
          <FaArrowAltCircleUp />
        </button>
      )}
    </>
  );
};

export default Home;