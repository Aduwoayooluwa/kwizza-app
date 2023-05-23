"use client"
import React from 'react'

type Props = {

}



const GetStartedSection: React.FC = () => {
    return (
        <section className="py-12 h-[400px] grid place-items-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
                Ready to Get Started?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-center text-gray-500 lg:mx-auto">
                Create an account and start creating and sharing quizzes today!
            </p>
            </div>
            <div data-aos="fade-up" className="mt-10 flex justify-center space-x-4">
            <a
                href="/auth/register"
                className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium"
            >
                Get Started
            </a>
            <a
                href="/auth"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg text-lg font-medium"
            >
                Log In
            </a>
            </div>
        </div>
        </section>
    );
};

export default GetStartedSection;
