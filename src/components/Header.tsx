import { useState } from "react";

import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";
// import { menu } from "@/json/menu";
import Mode from "@/components/Mode";
import Image from "next/image";
import { XMarkIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="sticky top-0 w-full h-20 py-3 dark:bg-black bg-white z-50">
      <div className="container">
        <nav className="relative w-full h-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={AppConfig.image} alt={AppConfig.author} title={AppConfig.author} width={60} height={60} />
          </Link>
          <div className="flex gap-3 md:order-2">
            <Mode />
            <button onClick={handleMenu} className="mr-3 md:mr-0">
              {
                open ? (
                  <XMarkIcon className="w-6 h-6 dark:text-yellow text-black" />
                ) : (
                  <Bars3CenterLeftIcon className="w-6 h-6 dark:text-yellow text-black" />
                )
              }
            </button>
          </div>
          {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {
                menu.map((item, index) => (
                  <li key={index} className="mx-auto">
                    <Link href={item.url} title={item.slug} target={item.target} className="block py-2 pl-3 pr-4 text-white font-semibold capitalize rounded md:p-0">{item.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div> */}
        </nav>
      </div>
    </header>
  )
};

export { Header };