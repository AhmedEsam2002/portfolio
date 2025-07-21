"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
      className="h-full w-full"
    >
      <div className="container mx-auto"></div>
    </motion.section>
  );
}
