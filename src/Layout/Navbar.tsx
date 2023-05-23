"use client"
import Link from "next/link";
import { useState } from "react";
import { Twirl as Hamburger} from "hamburger-react";
import Image from "next/image";

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({

    }) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleToggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <nav className="bg-white z-20 fixed w-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                    <div className="flex  items-center w-full">
                        <Image className="" src={"/kwiza_logo.svg"} width={40} height={30} alt="logo" />
                        <p className="ml-2 text-lg md:text-xl  text-primary font-bold mt-1">Kwizza</p>
                    </div>
                    
                </Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
                <button
                onClick={handleToggle}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out"
                >
                <Hamburger
                    size={20}
                    duration={0.5}
                    toggled={isOpen}
                    toggle={handleToggle}
                />
                </button>
            </div>
            <div className="hidden md:flex md:items-center">
                <div className="ml-10 flex items-baseline">
                <Link href="/blog">
                    <p className="mr-5 font-medium text-gray-800 hover:text-gray-900">
                    Blog
                    </p>
                </Link>
                <Link href="#features">
                    <p className="mr-5 font-medium text-gray-800 hover:text-gray-900">
                    Features
                    </p>
                </Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-5">
                    <Link href={'/auth/register'}>
                    Get Started
                    </Link>
                </button>
                <button className="border border-gray-800 hover:border-gray-900 text-gray-800 hover:text-gray-900 px-4 py-2 rounded-md">
                <Link href={'/auth'}>
                    Login
                </Link>
                </button>
                </div>
            </div>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden flex">
            <div className="px-2 pt-2 pb-3 sm:px-3">
                <Link href="/blog">
                <p className="block font-medium text-gray-800 hover:text-gray-900">
                    Blog
                </p>
                </Link>
                <Link href="/features">
                <p className="block font-medium text-gray-800 hover:text-gray-900">
                    Features
                </p>
                </Link>
                <button className="block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md my-3">
                {"Get Started"}
                </button>
                <button className="block border border-gray-800 hover:border-gray-900 text-gray-800 hover:text-gray-900 px-4 py-2 rounded-md">
                {"Login"}
                </button>
            </div>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
