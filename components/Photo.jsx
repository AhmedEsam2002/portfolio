"use client";
import Image from "next/image";
import myimg from "../assets/AhmedEssam.png";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center my-5 xl:mt-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Circle */}
        <motion.svg
          className="absolute w-[350px] h-[350px] xl:w-[506px] xl:h-[506px] -top-5 -left-5 xl:-top-10 xl:-left-10"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--color-accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <div className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten">
            <Image
              src={myimg}
              alt="Ahmed Esam"
              className="object-contain"
              priority
              quality={100}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
