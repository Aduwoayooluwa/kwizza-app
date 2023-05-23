import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className="lg:h-screen md:h-full h-screen" id="hero">
        <div className="max-w-7xl  mx-auto px-4 pt-20 pb-5 md:pb-0 md:mt-0 sm:px-6 lg:px-3 flex flex-col-reverse md:flex-row h-full items-center justify-between">
            <div className="md:w-1/2 w-full order-last md:order-first ">
            <Image
                src="/hero_image_1.png"
                alt="Hero Image"
                width={800}
                height={600}
                className="rounded-lg"
            />
            </div>
            <div className="md:w-[40%] w-full flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Create engaging quizzes and audio spelling bee challenges effortlessly
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-12">
            Easily create engaging quizzes and audio challenges, such as spelling bees and trivia contests. With simple creation tools, users can unleash their knowledge and have fun challenging others.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                <Link href={'/auth/register'}>
                Get Started
                </Link>
            </button>
            </div>
        </div>
        </section>
    );
};

export default Hero;
