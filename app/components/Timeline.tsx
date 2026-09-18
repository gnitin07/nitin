import React from "react";

const Timeline: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Intigly",
      location: "Bangalore, India",
      date: "08/2025 - Present",
      description:
        "Solely designed and built the frontend of an enterprise media review platform — threaded comments, voice messages, canvas annotations, version comparison and a PDF viewer across video, image, audio and documents.",
    },
    {
      title: "Front End Developer",
      company: "Bapa Sitaram Innovation and Technologies",
      location: "Vadodara, Gujarat",
      date: "10/2023 - 07/2025",
      description:
        "Led a Solar Management System with role-based access control, dynamic quotation generation and PDF handling, plus an eCommerce platform and admin panel for Ayurvedic products.",
    },
    {
      title: "React.js Developer",
      company: "Eshkon",
      location: "Remote",
      date: "07/2023 - 09/2023",
      description:
        "Built 30+ reusable UI components with Next.js, TypeScript and Redux, integrated Contentful headless CMS and shipped an SEO-optimised Next.js application with dynamic page generation.",
    },
    {
      title: "Front End Developer",
      company: "Echnotech Pvt Ltd",
      location: "Bangalore, Karnataka",
      date: "04/2023 - 06/2023",
      description:
        "Built responsive applications with React, Redux and Material-UI, including dynamic tables with filtering, search and pagination, and a Delivery Partner Management System with KYC and order tracking.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative border-l-4 border-purple-800">
        {experiences.map((experience, idx) => (
          <div className="mb-8 pl-8" key={idx}>
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9.5px] mt-1"></div>
            <p className="text-sm text-gray-600">{experience.date}</p>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-md font-medium text-purple-500">
              {experience.company}, {experience.location}
            </p>
            <p className="text-zinc-500">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
