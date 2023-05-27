"use client"
import Image from 'next/image'
import React, { useState} from 'react'
import { signUp } from './helper'
import BinanceLoader from '@/components/loader/BinanceLoader'
import { useRouter } from 'next/navigation'
import Navbar from '@/Layout/Navbar'
type Props = {}

const Register = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorStatus, setErrorStatus] = useState(false)
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
      
        try {
          await signUp(email, password, setSuccess, setError, setErrorStatus);
      
          if (!errorStatus) {
            router.push("/start");
            sessionStorage.setItem("isAuth", "true");
          }
        } catch (error) {
          setError("An error occurred. Please try again."); // Set a generic error message
          setErrorStatus(true);
        } finally {
          setLoading(false);
        }
      };
      

    return (
        <>
        <Navbar />
        <section className="relative flex flex-wrap bg-tertiary h-screen items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2  lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4 text-gray-500">
            Easily create engaging quizzes and audio challenges, such as spelling bees and trivia contests. With simple creation tools, users can unleash their knowledge and have fun challenging others.
            </p>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md   space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Email</label>

                <div className="relative">
                <input
                    type="email"
                    className="w-full rounded-lg border-gray-200  focus:border-primary border outline-none p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    onChange={(event) => {
                        event.preventDefault();
                        setEmail(event.target.value)}}
                    required
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                    </svg>
                </span>
                </div>
            </div>

            <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                <input
                    type="password"
                    className="w-full border focus:border-primary outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    onChange={(event: any) => {
                        event.preventDefault()
                        setPassword(event.target.value)}}
                    required
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    </svg>
                </span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                You have an Account?
                <a className="underline" href="/auth">Sign In</a>
                </p>

                <button
                type="submit"
                className={`grid place-items-center rounded-lg bg-blue-500 w-[100px] h-[40px] ${loading ? "px-0 py-0" : "px-5 py-3"} text-sm font-medium text-white`}
                onClick={(e:any) => {
                    handleSubmit(e)
                }} disabled={loading}
                >
                {loading ? (<BinanceLoader />): "Sign Up"}
                </button>
            </div>
            </form>
        </div>

        <div className="relative h-64 w-full hidden md:flex sm:h-96 lg:h-full lg:w-1/2">
            <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
            loading='lazy'
            
            />

            {/* <Image
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
            fill
            /> */}
        </div>
        </section>
        </>
        
    )
}

export default Register