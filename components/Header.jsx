import Link from "next/link";
import Button from "./Button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-8 text-white ">
      <div className="container  px-10 md:px-0 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">
            AhmedEsam
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
