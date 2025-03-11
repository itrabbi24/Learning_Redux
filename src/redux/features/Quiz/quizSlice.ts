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
            const { questionIndex, answer } = action.payload; 
            // console.log(questionIndex, answer); 
            state.userAnswer[questionIndex] = answer;
        },
        nextQuestion:(state)=> {
            // state.currentQuestionIndex++;
            if (state.currentQuestionIndex < state.question.length - 1) {
                state.currentQuestionIndex++;
            }
        },
        prevQuestion:(state)=>{
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex --;
            }
        }
    }
});



export const { setAnswer, nextQuestion, prevQuestion } = quizSlice.actions;
export default quizSlice.reducer;