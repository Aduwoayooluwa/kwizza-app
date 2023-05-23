import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-shrink-0 flex my-3 items-center">
                <Link href="/">
                    <div className="flex  items-center  w-full">
                        <Image className="" src={"/kwiza_logo.svg"} width={40} height={30} alt="logo" />
                        <p className="ml-2 text-lg md:text-xl  text-white font-semibold mt-1">Kwizza</p>
                    </div>
                    
                </Link>
            </div>
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link href="/">
                <p className="text-white hover:text-gray-400 transition duration-200">
                Home
                </p>
            </Link>
            <Link href="/about">
                <p className="text-white hover:text-gray-400 transition duration-200">
                About
                </p>
            </Link>
            <Link href="/contact">
                <p className="text-white hover:text-gray-400 transition duration-200">
                Contact
                </p>
            </Link>
            </nav>
            <div className="flex mt-3 flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-700  text-white py-2 px-4 rounded-md transition duration-200">
                <Link href={"/auth/register"}>
                Get Started
                </Link>
            </button>
            <Link href="/auth">
                <p className="text-white hover:text-gray-400 transition duration-200">
                Log In
                </p>
            </Link>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
