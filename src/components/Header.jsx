import Image from "next/image"
import menu from "@/config/menu.json";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
export default function Header(){
    const [nav, setNav] = useState(false);
    return(
        <header className="header z-30 sticky top-0">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-teal-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <Image src="/images/logo_batigo.png" width={70} height={70}/>                        
                    </a>
                    <ul className="hidden md:flex">
                        {menu.map((data,id) => (
                        <li
                            key={id}
                            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
                        >
                            <a href={data.url}>{data.name}</a>
                        </li>
                        ))}
                    </ul>
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer pr-4 z-10 text-white md:hidden"
                    >
                        {nav ? <FaTimes color="black" size={30} /> : <FaBars color="black" size={30} />}
                    </div>
                    {nav && (
                        <div className="justify-between items-center w-full" id="mobile-menu-2">
                            <ul className="nav-dropdown-list text-center flex flex-col mt-2 lg:flex-row lg:space-x-8 lg:mt-0">
                                {menu.map((data,i)=>(
                                    <li className="cursor-pointer nav-dropdown-item mb-5">
                                        <Link className="text-black font-bold" onClick={() => setNav(!nav)} href={data.url}>
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>              
        </header>
    )
}