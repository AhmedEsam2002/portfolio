"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and scalable web applications using modern technologies.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with React Native and JavaScript.",
    href: "/services/mobile-development",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Developing robust server-side applications and RESTful APIs with Node.js and Express.",
    href: "/services/backend-development",
  },
  {
    num: "04",
    title: "Database Integration",
    description:
      "Designing and implementing database solutions using MongoDB, PostgreSQL and other modern databases.",
    href: "/services/database-integration",
  },
];

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
          className="grid grid-cols-1 md:grid-cols-2  gap-16 text-white"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className=" flex flex-col justify-center gap-6 ">
                <div className="w-full flex justify-between items-center  text-outline text-transparent  group-hover:text-accent transition-all duration-500">
                  <div className="text-5xl font-extrabold ">{service.num}</div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white  hover:bg-accent  transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className=" text-[42px] font-bold leading-none  hover:text-accent  transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
