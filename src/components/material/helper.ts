import React from "react";

export const handleOptionAddRadioElement = (e:React.ChangeEvent<HTMLButtonElement>, setInputIncrementCount: any, setAddRadioInput: any) => {
    e.preventDefault();
    setInputIncrementCount((prev: number) => prev + 1)
    setAddRadioInput(true)
}

export const handleOptionSubtractRadioElement = (e:React.ChangeEvent<HTMLButtonElement>, setInputIncrementCount: any, setAddRadioInput: any) => {
    e.preventDefault();
    setInputIncrementCount((prev: number) => prev - 1)
    setAddRadioInput(true)
}

export const nextQuestion = (selected: string, setSelected: any, data: any, onAnswerUpdate: any, saveAnswer: any, onSetActiveQuestion: any, onSetStep: any, activeQuestion: number, numberOfQuestions: number) => {
    if (selected === '') {
        alert('select an option')
        return;
    }
    onAnswerUpdate((prevState: any) => [
        ...prevState,
        { q: data.questions, a: selected },
    ]);
    saveAnswer(data?.answer, data?.id)
    console.log(data?.id)
    setSelected('');
    console.log(selected)
    if(activeQuestion < numberOfQuestions - 1) {
    onSetActiveQuestion(activeQuestion + 1);

    }else {
    onSetStep(3);
    
    }
}

export const handleQuizCardIsCheck = (e: React.ChangeEvent<HTMLInputElement>, setSelected: any, setOptionValue: any) => {
    setSelected(e.target.value);
    setOptionValue(e.target.value)
};


export const handleQuizCardSave = (selected: string, setCorrect: any, data: any) => {
    if (selected === data.answer) {
        setCorrect(true);
        console.log('correct');
    } else {
        setCorrect(false);
        console.log('incorrect');
    }
};
