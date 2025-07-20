import { ScrollArea } from "@/components/ui/scroll-area";
export default function ExperienceTap({ experience }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea className={"h-[400px]"}>
        <ul>
          {experience.items.map((item, index) => (
            <li>
              <span>{item.duration}</span>
              <h3>{item.position}</h3>
              <div>
                {/* dot */}
                <span></span>
                <p>{item.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
