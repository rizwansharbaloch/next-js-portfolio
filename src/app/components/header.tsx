import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
  

const Header: React.FC = () => {
  return (
    <header className="w-full h-15 flex justify-between items-center bg-gray-500 bg-white ">
      <div className="text-3xl font-bold pl-3">{"Shar"}</div>
      <ul className="hidden md:block">
        <li className="space-x-12 pr-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
          <button className="bg-gray-600 hover:bg-gray-950 text-white py-3 px-4 rounded-xl font-bold">Hire Now</button>
        </li>
      </ul>
      <Sheet>
  <SheetTrigger className="text-xl md:hidden">
  <Menu/>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Rizwan Ahmed Shar</SheetTitle>
      <SheetDescription>
      <ul>
        <li className=" flex flex-col gap-y-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
          <button className=" bg-gray-800 text-white py-3 px-4 rounded-lg">Download CV</button>
        </li>
      </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
  </Sheet>

    </header>
  );
};

export default Header;
