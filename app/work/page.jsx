"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-16 xl:pt-24 xl:pb-2">
          <div className="text-center xl:text-left">
            <h1 className="h1">My Work</h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Here you can explore my portfolio of projects and see what I've
              been working on.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
