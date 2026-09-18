import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "The Priyanshu | Resume" },
    { name: "description", content: "Welcome to The Priyanshu!" },
  ];
};
const Resume: React.FC = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    sectionsRef.current.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
        stagger: 0.5,
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 w-[90%] md:w-[50%]">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          Priyanshu Kumar
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400 mt-2">
          Bengaluru, Karnataka | +91 8407053234 | 28priyanshu2001@gmail.com
        </p>
        <p className="text-md text-gray-600 dark:text-neutral-400 mt-2">
          Languages: Hindi, English
        </p>
      </div>

      {/* Summary Section */}
      <div ref={(el) => (sectionsRef.current[0] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Frontend Engineer with 3+ years of experience building scalable
          enterprise applications using React.js, Next.js, and TypeScript.
          Proven experience delivering complex frontend systems including
          collaborative media review platforms, annotation engines, PDF viewers,
          RBAC, and high-performance user interfaces. Strong focus on frontend
          architecture, performance optimization, reusable component design, and
          building reliable production-scale applications.
        </p>
      </div>

      {/* Experience Section */}
      <div className="my-10">
        <h2
          className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          Experience
        </h2>

        {/* Job 1: Intigly */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[2] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Frontend Engineer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Intigly | Bangalore, India
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            08/2025 - Present
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Solely designed and developed the frontend for an enterprise media
              review platform competing with Frame.io, StreamWork, Air, and
              Krock.
            </li>
            <li>
              Built a collaborative review system supporting threaded comments,
              voice messages, annotations, drawings, and shape tools across
              videos, images, audio, PDFs, and unsupported files.
            </li>
            <li>
              Engineered a canvas-based annotation system with drawing,
              geometric shapes, undo/redo, zoom, pan, and precision anchor
              positioning.
            </li>
            <li>
              Developed custom media viewing systems including a video player,
              audio player, and image viewer with version control support.
            </li>
            <li>
              Built advanced media viewers with version history and comparison
              modes, including synchronized side-by-side and interactive slider
              comparison for images and videos.
            </li>
            <li>
              Developed a PDF viewer supporting text selection, anchor-based
              comments, contextual navigation, and persistent document
              references.
            </li>
            <li>
              Implemented secure public review links, enabling external clients
              to review assets and provide feedback without authentication.
            </li>
            <li>
              Optimized complex rendering workflows to maintain smooth
              interactions across large media files and annotation-heavy review
              sessions.
            </li>
            <li>
              Technologies: React.js, TypeScript, Tailwind CSS, HTML Canvas,
              REST APIs, Media APIs.
            </li>
          </ul>
        </div>

        {/* Job 2: Bapa Sitaram Innovation and Technologies */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[3] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Front End Developer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Bapa Sitaram Innovation and Technologies | Vadodara, Gujarat
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            10/2023 - 07/2025
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Engineered and led the development of a Solar Management System
              with role-based access control (admin, branch manager, agent),
              dynamic quotation generation, PDF handling, and multi-step
              consumer onboarding.
            </li>
            <li>
              Designed and orchestrated the creation of an eCommerce platform
              for Ayurveda products, integrating secure authentication, product
              carousels, cart, checkout, and favorite functionalities.
            </li>
            <li>
              Developed and managed a comprehensive admin panel for eCommerce
              management, featuring dashboards, user tables, order management,
              and CRUD operations for products.
            </li>
            <li>
              Enhanced and extended banking software functionality with a
              user-friendly web application for transaction history, account
              details, and responsive client access.
            </li>
            <li>
              Developed two official websites, ensuring responsive designs,
              optimal performance, and seamless deployment using Cloudflare
              Tunnels and Vercel.
            </li>
            <li>
              Spearheaded the hosting and deployment of multiple web
              applications using Cloudflare Tunnels and Vercel, ensuring secure
              and efficient operations.
            </li>
          </ul>
        </div>

        {/* Job 3: Eshkon */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[4] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            React.js Developer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Eshkon | Remote
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            07/2023 - 09/2023
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Spearheaded the development of over 30 reusable UI components
              using Next.js, TypeScript, and Redux, improving UI consistency and
              performance across projects.
            </li>
            <li>
              Integrated Contentful headless CMS for effortless content
              management by non-technical teams, and optimized build processes
              with npm and SASS for scalable, efficient web applications.
            </li>
            <li>
              Developed a highly optimized Next.js web application focusing on
              SEO and performance, utilizing SEO schema markup and advanced
              features like dynamic page generation to boost organic traffic and
              enhance user satisfaction.
            </li>
          </ul>
        </div>

        {/* Job 4: Echnotech Pvt Ltd */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[5] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Front End Developer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Echnotech Pvt Ltd | Bangalore, Karnataka
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            04/2023 - 06/2023
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Led the development of highly responsive web applications using
              React, Redux, and Material-UI, ensuring seamless user experiences
              and optimized performance.
            </li>
            <li>
              Developed advanced features like dynamic table components with
              filtering, search, and pagination, and integrated RESTful APIs for
              smooth data interaction between the frontend and backend.
            </li>
            <li>
              Created a Delivery Partner Management System with KYC
              verification, map integration, and order tracking for wholesale
              operations, while implementing unit testing and code reviews to
              ensure high-quality code and site performance.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div ref={(el) => (sectionsRef.current[6] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Education
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">
            Patliputra University | Patna, Bihar
          </span>
          <br />
          Bachelor of Arts in Political Science | 03/2023
        </p>
      </div>

      {/* Skills Section */}
      <div ref={(el) => (sectionsRef.current[7] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          React.js, Next.js, TypeScript, Redux, Zustand, HTML5, CSS3,
          JavaScript, Tailwind CSS, Material-UI, Ant Design, Motion, GSAP, HTML
          Canvas, Express.js, Node.js, MongoDB, GitHub, Cloudflare, Vercel.
        </p>
      </div>
    </div>
  );
};

export default Resume;
