import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { MdNewLabel, MdStayCurrentPortrait } from "react-icons/md";
import { GiColdHeart } from "react-icons/gi";
import AosEff from "./Aos";
import ProjectImages from "../../ProjectImages";

const projects = {
  newProjects: [
    {
      img: ProjectImages.foodieOrder,
      title: "Foodie Order",
      description:
        "A sleek restaurant ordering platform that allows users to explore menus, place orders, and make reservations seamlessly.",
      link: "https://my-restaurant-three.vercel.app/",
    },
    {
      img: ProjectImages.jobList,
      title: "Job Listing Application",
      description:
        "A dynamic platform for job seekers to search and apply for job opportunities, with filters for location, role, and industry.",
      link: "https://joblisting-project.vercel.app/",
    },
    {
      img: ProjectImages.musicApp,
      title: "Music Application",
      description:
        "A beautifully designed music streaming platform featuring playlists, favorite tracks, and personalized recommendations.",
      link: "https://drc-music-app-vutw.vercel.app/",
    },
    {
      img: ProjectImages.bookYourStay,
      title: "Hotel Booking Application",
      description:
        "A robust application to browse, compare, and book hotel stays, with features like room previews and customer reviews.",
      link: "https://book-your-stay-kohl.vercel.app/",
    },
  ],
  currentProjects: [
    {
      img: ProjectImages.gymweb,
      title: "Drc‑Gym Website",
      description:
        "Responsive gym site showcasing services, schedules, and trainer profiles.",
      link: "https://dorcson-gym.vercel.app/",
    },
    {
      img: ProjectImages.socialSync,
      title: "SocialSync",
      description:
        "A comprehensive social media scheduling tool for planning, organizing, and publishing content across multiple platforms.",
      link: "https://socialsync-project.vercel.app/",
    },
    {
      img: ProjectImages.gym,
      title: "Drc‑Gym Website (Svelte)",
      description:
        "Responsive gym site showcasing services, schedules, and trainer profiles.",
      link: "https://svelte-gym-ui.vercel.app/",
    },
  ],
  oldProjects: [
    {
      img: ProjectImages.switchRisk,
      title: "SwitchRisk",
      description:
        "A platform designed to assess, evaluate, and manage risks effectively for businesses and individuals.",
      link: "https://switch-risk.vercel.app/",
    },
    {
      img: ProjectImages.weatherApp,
      title: "Weather Application",
      description:
        "A simple and efficient app to check real-time weather updates, including temperature, forecasts, and wind conditions.",
      link: "https://weatherapp-two-eta.vercel.app/",
    },
    {
      img: ProjectImages.vansLife,
      title: "Vans Life",
      description:
        "A lifestyle-focused platform offering insights and services for van living enthusiasts, from customization to community connections.",
      link: "https://react-test-tau-five.vercel.app/",
    },
    {
      img: ProjectImages.hyra,
      title: "Hyra",
      description:
        "A modern rental application for finding, listing, and managing rental properties with ease.",
      link: "https://hyra-tau.vercel.app/",
    },
    {
      img: ProjectImages.todo,
      title: "Task Management App",
      description: "A task management app to keep you organized.",
      link: "https://adeshola-task-reminder.netlify.app/",
    },
    {
      img: ProjectImages.printivo,
      title: "Printivo Clone",
      description: "Website clone of Printivo.",
      link: "https://printivo-clone.netlify.app/",
    },
    {
      img: ProjectImages.ecommerce,
      title: "Doc-buy",
      description: "E-commerce website for wears shopping.",
      link: "https://dorc-pay.netlify.app/productpage.html",
    },
    {
      img: ProjectImages.crownWealth,
      title: "Crown Wealth Institute",
      description:
        "A knowledge-sharing platform offering courses, certifications, and resources for financial literacy and wealth management.",
      link: "https://angular-text-tz1j.vercel.app/",
    },
    {
      img: ProjectImages.recipes,
      title: "Recipes",
      description:
        "A visually appealing app for discovering, saving, and sharing your favorite recipes.",
      link: "https://first-vue-omega.vercel.app/recipes",
    },
    {
      img: ProjectImages.bmiCalculator,
      title: "BMI Calculator",
      description: "A handy BMI Calculator.",
      link: "https://bmigradingsystem.netlify.app/",
    },
    {
      img: ProjectImages.gradingSystem,
      title: "Grading System",
      description: "A student grading system.",
      link: "https://schoolgradingsystem.netlify.app/",
    },
    {
      img: ProjectImages.calculator,
      title: "Calculator",
      description: "A clean, functional calculator.",
      link: "https://problemsolve.netlify.app/",
    },
    {
      img: ProjectImages.lightingBulb,
      title: "Lighting Bulb",
      description: "An interactive lighting bulb demo.",
      link: "https://light-125d.netlify.app/",
    },
  ],
};

const VISIBLE_COUNT = 3;

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const Project = () => {
  const [category, setCategory] = useState("newProjects");
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(0);

  const items = projects[category];
  const totalPages = Math.ceil(items.length / VISIBLE_COUNT);
  const startIndex = page * VISIBLE_COUNT;
  const visibleItems = items.slice(startIndex, startIndex + VISIBLE_COUNT);

  const paginate = (step) => {
    const newPage = page + step;
    if (newPage < 0 || newPage >= totalPages) return;
    setDir(step);
    setPage(newPage);
  };

  const handleCategoryChange = (key) => {
    setCategory(key);
    setPage(0);
    setDir(0);
  };

  // Unique key for the current visible "slide" so AnimatePresence triggers on change
  const slideKey = `${category}-page-${page}`;

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 280, damping: 28 }}>
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <AosEff />
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">
          My Projects
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            ["newProjects", <MdNewLabel />, "New Projects"],
            ["currentProjects", <MdStayCurrentPortrait />, "Current Projects"],
            ["oldProjects", <GiColdHeart />, "Old Projects"],
          ].map(([key, Icon, label]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                category === key
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {Icon} <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Desktop Slider */}
        <div className="relative hidden md:block">
          {/* Overflow container with fixed height */}
          <div className="overflow-hidden rounded-xl" style={{ minHeight: 420 }}>
            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={slideKey}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-3 gap-4 w-full"
              >
                {visibleItems.map((item) => (
                  <Card key={item.title} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev Button */}
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition
              ${page === 0
                ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={() => paginate(1)}
            disabled={page >= totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition
              ${page >= totalPages - 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
          >
            ›
          </button>

          {/* Page Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > page ? 1 : -1);
                    setPage(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === page ? "bg-orange-500 w-5" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile: show all cards */}
        <div className="md:hidden grid gap-4">
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </section>
    </MotionConfig>
  );
};

function Card({ item }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-gray-400 mt-2 flex-grow text-sm leading-relaxed">
          {item.description}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 transition-colors text-center"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;