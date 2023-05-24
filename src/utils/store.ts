"use client"
import { create } from 'zustand';

interface IScore {
    score: number;
    savedQuestions: Set<string>;
    incrementScore: (questionId: string) => void
}

export const useScoreStore = create<IScore>((set: any) => ({
    score: 0,
    savedQuestions: new Set(),
    
    incrementScore: (questionId: any) => {
        set((state: any) => {
            if (!state.savedQuestions.has(questionId)) {
                const newSavedQuestions = new Set(state.savedQuestions);
                newSavedQuestions.add(questionId);
        
                return {
                score: state.score + 1,
                savedQuestions: newSavedQuestions,
                };
            }
        
            return state;
            });
        },
}));

