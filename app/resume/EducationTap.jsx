"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function EducationTap({ education }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {education.description}
      </p>

      <ScrollArea
        className={"h-[340px] overflow-y-auto"}
        thumbClassName="bg-accent"
      >
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pb-3"
          aria-label="Education list"
        >
          {education.items?.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-lg max-w-[350px] text-center lg:text-left line-clamp-3 overflow-ellipsis">
                {item.degree}
              </h3>
              <div className="flex items-center gap-3 text-white/60">
                <span className="w-[6px] h-[6px] bg-accent rounded-full flex-shrink-0" />
                <p className="break-words">{item.institution}</p>
              </div>
            </li>
          ))}
        </ul>
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}
