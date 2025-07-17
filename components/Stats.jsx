"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const days = Math.floor(
  (new Date() -
    new Date(
      new Date("2002-12-03").setFullYear(
        new Date("2002-12-03").getFullYear() + 10
      )
    )) /
    (1000 * 60 * 60 * 24)
);

const stats = [
  {
    title: "Years of Experience",
    value: 4,
  },
  {
    title: "Clients",
    value: 20,
  },
  {
    title: "Projects",
    value: 50,
  },
  {
    title: "Cups of Coffee",
    value: days,
  },
];

export default function Stats() {
  return (
    <section className="">
      <div className="container mx-auto flex flex-wrap max-w-[80vw] items-center justify-between gap-8  pt-9">
        {stats.map(({ title, value }, idx) => (
          <div
            key={idx}
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
          >
            <CountUp
              end={value}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
