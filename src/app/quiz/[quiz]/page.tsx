
import DisplayQuiz from '@/version_one/container/DisplayQuiz';
import React from 'react'

type Props = {}

export default function Page ({ params }: any) {
  console.log('params', params.quiz)
  return <div>
      <DisplayQuiz table={params?.quiz}/>
  </div>;
}

