"use client"
import Navbar from '@/Layout/Navbar'
import useFetchQuiz from '@/hooks/useGetQuiz'
import LandingPage from '@/views/landingpage/LandingPage'
import Image from 'next/image'

export default function Home() {
  const { quiz }: any = useFetchQuiz("quiz_questions")
  console.log(quiz)
  return (
    <main>
      <Navbar />
      <LandingPage />
    </main>
  )
}
