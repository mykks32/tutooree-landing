import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background pt-4">
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3 border border-gray-300 rounded-xl">
        <Link href="/" className="flex items-center">
          <Image src="/Tutoree.svg" alt="TutoTree" width={100} height={40} />
        </Link>

        <nav className="flex items-center gap-4 max-sm:hidden">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Find Tutors</Button>
          <Button variant="ghost">Become a Tutor</Button>
          <Button variant="ghost">Contact</Button>
          <Button size="lg">Sign In</Button>
        </nav>

        <Button variant="ghost" size="icon" className="hidden max-sm:flex">
          <Menu className="w-7 h-7" />
        </Button>
      </header>
    </div>
  );
};

export default Header;
