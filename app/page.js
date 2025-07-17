import Button from "@/components/Button";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between pt-4 xl:pt-8  xl:pb-24">
            <div className="text-center xl:text-left">
              <span className="text-xl">Software Engineer</span>
              <h1 className="h1">
                Hello, I&apos;m <br />{" "}
                <span className="text-accent">Ahmed Esam</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am a software engineer with a passion for building scalable
                web applications and exploring new technologies. I love
                transforming ideas into reality through code and design.
              </p>
              {/* buttons and social links */}
              <div className="flex flex-col xl:flex-row items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 "
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    ContainerStyles={"flex items-center gap-6"}
                    iconStyles={
                      "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
