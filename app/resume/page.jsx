"use client";
import Link from "next/link";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import ExperienceTap from "./ExperienceTap";
// Data of Tabs
const about = {
  title: "About Me",
  description:
    " I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in modern web technologies, and I am always eager to learn and adapt to new challenges.",

  Info: [
    {
      fieldName: "Ahmed Esam",
      fieldValue: "Web Developer",
    },
    {
      fieldName: "Location",
      fieldValue: "Cairo, Egypt",
    },
    {
      fieldName: "Email",
      fieldValue: "ahmedesamnew2002@gmail.com",
    },
    {
      fieldName: "Phone",

      fieldValue: "+20 100 000 0000",
    },
    {
      fieldName: "Experience",
      fieldValue: "+4 Years ",
    },
    // github
    {
      fieldName: "github",
      fieldValue: "AhmedEsam2002",
    },
  ],
};
const experience = {
  icon: "../assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in modern web technologies, and I am always eager to learn and adapt to new challenges.",

  items: [
    {
      company: "GIS Company",
      position: "Frontend Intern",
      duration: "2024 - Present",
    },
    {
      company: "RoboDizer Academy",
      position: "Programming & Robotics Instructor",
      duration: "2023 - 2024",
    },
    {
      company: "EduZone Platform",
      position: "Frontend Developer (Freelance)",
      duration: "2024",
    },
    {
      company: "Amgad Schools",
      position: "ICT Teacher (Intern)",
      duration: "2023",
    },
  ],
};
const education = {
  icon: "../assets/resume/cap.svg",
  title: "Education",
  description:
    "I hold a Bachelor's degree in Computer Science and Artificial Intelligence from Cairo University, where I developed strong foundations in algorithms, machine learning, and software engineering.",

  items: [
    {
      institution: "Cairo University",
      degree: "B.Sc. in Computer Science & Artificial Intelligence",
      duration: "2019 - 2023",
    },
    {
      institution: "Coursera & Udemy",
      degree: "Full-Stack Web Development Nanodegree",
      duration: "2023 - 2024",
    },
    {
      institution: "RoboDizer Academy",
      degree: "Robotics & Teaching Training",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "JavaScript Algorithms and Data Structures Certification",
      duration: "2022",
    },
  ],
};
const skills = {
  title: "Skills",
  description: "My technical skills include:",
  items: [
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb/ef4444",
    },
    {
      name: "Express.js",
      icon: "https://cdn.simpleicons.org/express/ef4444",
    },
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react/ef4444",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs/ef4444",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/ef4444",
    },
    {
      name: "HTML5",
      icon: "https://cdn.simpleicons.org/html5/ef4444",
    },
    {
      name: "CSS3",
      icon: "https://cdn.simpleicons.org/css/ef4444",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/ef4444",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git/ef4444",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github/ef4444",
    },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql/ef4444",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql/ef4444",
    },
    {
      name: "SQLite",
      icon: "https://cdn.simpleicons.org/sqlite/ef4444",
    },
    {
      name: "LeetCode",
      icon: "https://cdn.simpleicons.org/leetcode/ef4444",
    },
    {
      name: "HackerRank",
      icon: "https://cdn.simpleicons.org/hackerrank/ef4444",
    },
  ],
};

const triggerStyle =
  "inline-flex items-center w-full justify-center " +
  "bg-[#27272c] text-white rounded-lg p-3 " +
  "whitespace-nowrap font-medium text-balance " +
  "ring-offset-white transition-all " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "data-[state=active]:bg-accent data-[state=active]:text-primary " +
  "data-[state=active]:font-bold data-[state=active]:shadow-sm";

export default function page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container px-10 md:px-0 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 2.4, ease: "easeIn" },
          }}
        >
          {/* Tabs */}
          <Tabs
            defaultValue="about"
            className="flex flex-col justify-center items-center xl:flex-row gap-[60px] "
          >
            <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6  h-fit">
              <TabsTrigger value="about" className={triggerStyle}>
                About Me
              </TabsTrigger>
              <TabsTrigger value="experience" className={triggerStyle}>
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className={triggerStyle}>
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className={triggerStyle}>
                Skills
              </TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent value="about" className={"w-full"}>
                about
              </TabsContent>
              <TabsContent value="experience" className={"w-full"}>
                <ExperienceTap experience={experience} />
              </TabsContent>
              <TabsContent value="education" className={"w-full"}>
                education
              </TabsContent>
              <TabsContent value="skills" className={"w-full"}>
                skills
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
