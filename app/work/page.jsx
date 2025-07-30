"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

// Projects data
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Modern Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion featuring smooth animations and modern design.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/thumb1.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce solution with user authentication, payment integration, and admin dashboard for managing products and orders.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb2.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "Web App",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Firebase" }],
    image: "/assets/work/thumb3.png",
    live: "#",
    github: "#",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setCurrentSlide(currentIndex);
  };

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-10 xl:px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Details */}
          <motion.div
            key={project.num}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project Number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="text-8xl leading-none font-extrabold text-transparent text-outline hover:text-accent/20 transition-all duration-500"
              >
                {project.num}
              </motion.div>

              {/* Project Category */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} Project
              </motion.h2>

              {/* Project Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className="text-2xl font-semibold text-accent mb-2"
              >
                {project.title}
              </motion.h3>

              {/* Project Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="text-white/60 max-w-[400px] leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                className="flex gap-4 flex-wrap"
              >
                {project.stack.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    className="text-xl text-accent hover:text-accent-hover transition-colors duration-300 cursor-default"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="border border-white/20 origin-left"
              ></motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/10 transition-all duration-300">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/10 transition-all duration-300">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Project Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.2, duration: 0.6, ease: "easeOut" }}
            className="w-full xl:w-[50%]"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={handleSwiperInit}
              modules={[Navigation, Pagination]}
              navigation={{
                enabled: false, // Disable built-in navigation since we have custom
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-white/30",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-accent",
              }}
              speed={600}
              effect="slide"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-[460px] relative group flex justify-center items-center bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-500"
                  >
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={project.title}
                      />
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <h4 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {project.title}
                      </h4>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
