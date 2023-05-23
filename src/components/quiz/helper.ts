import supabase  from "@/utils/supabase";

// debounce function
export function debounce<F extends (...args: any[]) => any>(func: F, delay=500) {
    let timer: any;

    return function (this:ThisParameterType<F>, ...args: any) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }

}

// function to start Quiz
export const startQuizHandler = (setStep:any, intervalRef: any, setTime: any) => {
    setStep(2);
        intervalRef.current = setInterval(() => {
            setTime((prevTime: number | null) => {
                if (prevTime === null) {
                    return 1;
                } else {
                    return prevTime + 1;
                }
            });
        }, 1000);
    
}


// funtion to reset Quiz
export const resetQuizHandler = (setActiveQuestion: any, setAnswers: any, setTime: any, setStep: any, intervalRef: any) => {
    setActiveQuestion(0);
        setAnswers([]);
        setStep(2);
        setTime(0);
        clearInterval(intervalRef?.current);
        intervalRef.current = setInterval(() => {
            setTime((prevTime: number | null) => {
                if (prevTime === null) {
                    return 1;
                } else {
                    return prevTime + 1;
                }
            });
        }, 1000);
}
