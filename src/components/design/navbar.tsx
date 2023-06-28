"use client";
import { useState } from "react";

import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Sheet,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeSelect from "@/components/theme-select";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="summaraizer logo"
              width={32}
              height={32}
            /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 light:text-gray-900 dark:text-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 light:text-gray-900 dark:text-gray-100"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <ThemeSelect />
        </div>
      </nav>

      <Sheet open={mobileMenuOpen}>
        <SheetContent>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-800 dark:data-[state=open]:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Open main menu</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </header>
  );
}
