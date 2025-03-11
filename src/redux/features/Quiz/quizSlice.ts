import { quizData } from '@/home/quizData';
import { createSlice } from '@reduxjs/toolkit'


interface TQuiz {
    question: typeof quizData;
    currentQuestionIndex : number;
    userAnswer : (string | null)[];
    quizComplete : boolean;
}


const initialState : TQuiz = {
    question: quizData,
    currentQuestionIndex: 0,
    userAnswer: Array(quizData.length).fill(null),
    quizComplete : false
}


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswer: (state, action) => {

        },
    }
});



export const { setAnswer } = quizSlice.actions;
export default quizSlice.reducer;