"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Item } from "@radix-ui/react-select";
const days = Math.floor(
  (new Date() -
    new Date(
      new Date("2002-12-03").setFullYear(
        new Date("2002-12-03").getFullYear() + 15
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
    value: 10,
  },
];

export default function Stats() {
  return (
    <section className="">
      <div className="container px-10 md:px-0   mx-auto grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 max-w-[80vw] gap-8 pt-9">
        {stats.map(({ title, value }, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-center justify-center xl:justify-start"
          >
            <CountUp
              end={value}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={`${
                title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } `}
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
