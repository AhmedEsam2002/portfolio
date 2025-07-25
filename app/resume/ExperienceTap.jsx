'"use client";';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export default function ExperienceTap({ experience }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea
        className={"h-[340px] overflow-y-auto"}
        thumbClassName="bg-accent"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pb-3">
          {experience.items.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.position}
              </h3>
              <div className="flex items-center gap-3 text-white/60">
                {/* dot */}
                <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                <p>{item.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
