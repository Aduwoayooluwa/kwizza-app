"use client"
import supabase from '@/utils/supabase'
import { useState, useEffect } from 'react'

const useFetchQuiz =  async (table: string) => {
    const [errorMessage, setErrorMessage] = useState<string>()
    const [quiz, setQuiz]: any = useState()
    const me = "you"
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const { data, error }: any = await supabase.from(table)
                                                .select('*')
                if (error) {
                    console.error(error)
                } 
                else {
                    setQuiz(data)
                    //console.log(quiz)
                }
                setIsLoading(false)           
            }
            catch(error) {
                setErrorMessage("Error While Getting Quiz")
                setIsLoading(false)
            }
            finally {
                setIsLoading(false)
            }
            
        }

        fetchQuiz()
        
    }, [table])
    console.log(quiz)
    return { me, quiz, errorMessage, isLoading }


}




export default useFetchQuiz