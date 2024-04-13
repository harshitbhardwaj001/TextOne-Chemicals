import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <Sheet className="w-[100vw] bg-white">
      <SheetTrigger>
        <Hamburger size={20} toggle={false} toggled={null} color="white" />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-[#fff] items-center">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center justify-center">
            <img
              src="https://file.rendit.io/n/vmtPznwaFOixQ5PjiNL7.png"
              alt="logo"
              width={100}
              height={100}
            />
          </SheetTitle>
          <div className="flex w-full flex-col pr-10 pt-[3rem]">
            <nav>
              <ul className="flex flex-col gap-5 text-[28px] md:max-xl:text-[14px] text-[#000] md:max-xl:gap-12 font-medium ml-[2rem]">
                <li>
                  <a href="/">Home</a>
                </li>
                <Separator className="bg-[#000]" />
                <li>
                  <a href="/about">About Us</a>
                </li>
                <Separator className="bg-[#000]" />
                <li>
                  <a href="/products">Products</a>
                </li>
                <Separator className="bg-[#000]" />
                <li>
                  <a href="/career">Career</a>
                </li>
                <Separator className="bg-[#000]" />
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <Separator className="bg-[#000]" />
              </ul>
            </nav>
          </div>
        </SheetHeader>
        <SheetFooter>
          <h1 className="text-black text-[13px] text-right mt-[3.5rem] pr-10">
            &#169; TextOne Chemicals
          </h1>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
