"use client";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

export default function SkillsTap({ skill }) {
  return (
    <div className=" w-full h-full flex flex-col gap-[30px] ">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skill.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skill.description}
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 gap-[30px] text-center">
        {skill.items.map((item, index) => (
          <li key={index} className="  ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="  mx-auto w-[150px]  xl:w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group relative overflow-hidden">
                  <div className="  text-6xl  transition-all duration-300 ease-in-out relative flex items-center justify-center">
                    <img
                      className="w-12 h-12 group-hover:text-accent transition-all duration-300 ease-in-out"
                      src={item.icon}
                      alt=""
                      onMouseEnter={(e) => {
                        let srcImg = e.target.src;
                        srcImg.split("/ef4444");
                        e.target.src = srcImg.replace("/ef4444", "/00ff99");
                      }}
                      onMouseLeave={(e) => {
                        let srcImg = e.target.src;
                        e.target.src = srcImg.replace("/00ff99", "/ef4444");
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-[#232329] text-white p-2 rounded-lg shadow-lg">
                  <span className="capitalize">{item.name}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
}
