import React from "react";

const Resume = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "ADESHOLA AYOMIDE CV.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="p-6 mt-16 md:w-3/4 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Resume</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <p className="text-lg">
          <strong>Name:</strong> ADESHOLA AYOMIDE JOSEPH
          <br />
          <strong>Email:</strong> josephay125d@gmail.com
          <br />
          <strong>Phone:</strong> 08163359235 / 09039732028
          <br />
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/ayomide-a-5a4549252/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/ayomide-a-5a4549252
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-lg">
          <li>JavaScript, HTML, CSS, SQL, React.js, Node.js</li>
          <li>Express.js, MongoDB, Bootstrap, Tailwind CSS</li>
          <li>Laravel, PHP, Vue.js, Next.js, Firebase</li>
          <li>Time Management, Adaptability, Teamwork</li>
          <li>Creativity, Problem Solving, Interpersonal Communication</li>
          <li>Active Listening, Work Ethic, Project Management</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-none space-y-4 text-lg">
          <li>
            <strong>Secondary School</strong>
            <br />
            Anglican Grammar School, Ogbomoso, Oyo State
            <br />
            Graduation Date: July 2022
          </li>
          <li>
            <strong>National Innovation Diploma</strong>
            <br />
            SQI College of ICT, Ogbomosho, Oyo State
            <br />
            August 2022 – 2024
            <br />
            Specialization: Web Development and Computer Application Packages
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul className="list-none space-y-6 text-lg">
          <li>
            <strong>Backend Engineer</strong>
            <br />
            Clan
            <br />
            [Jan-5-2026]
            <br />
            - Worked as a Backend Engineer, building and maintaining scalable
            server-side applications.
            <br />
            - Designed and implemented RESTful APIs to support frontend and
            mobile applications.
            <br />
            - Managed database architecture, authentication systems, and
            business logic implementation.
            <br />
            - Optimized performance and improved system reliability through
            structured testing and debugging.
            <br />- Collaborated closely with frontend engineers to ensure
            seamless API integration.
          </li>

          <li>
            <strong>Frontend Engineer</strong>
            <br />
            CodeMatrix Consult Ltd
            <br />
            [June-3-2025]
            <br />
            - Worked as a Frontend Engineer using Svelte framework and Capacitor
            JS to build scalable web applications.
            <br />- Contributed to the development of{" "}
            <a
              href="https://dockhive.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              DockHive
            </a>
            , a cutting-edge cloud infrastructure platform for Web2 and Web3
            applications.
            <br />
            - Built and optimized responsive user interfaces for DockHive,
            ensuring seamless user experience.
            <br />
            - Collaborated with backend engineers to integrate APIs and support
            containerized application deployment workflows.
            <br />- Contributed to the development of a decentralized cloud
            infrastructure platform leveraging containerization.
          </li>

          <li>
            <strong>Frontend Developer (Internship)</strong>
            <br />
            Digit Information Software and Technologies, Lagos State, Nigeria
            <br />
            June 2023 – Oct 2023
            <br />
            - Participated in a team effort to create a travel agency website,
            resulting in a 20% increase in attendance.
            <br />
            - Developed a consulting website that enhanced productivity by 30%.
            <br />
            - Designed and implemented both frontend and backend, including API
            integration, user authentication, and database management.
            <br />
            - Led the design and implementation of communication materials,
            boosting company visibility and engagement.
            <br />- Shared ideas on the growth and development of the
            organization.
          </li>
        </ul>
      </section>

      <section className="text-center mt-8">
        <button
          onClick={handleDownloadResume}
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </button>
      </section>
    </div>
  );
};

export default Resume;
