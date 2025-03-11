import { quizData } from '@/home/quizData';
import { createSlice, current } from '@reduxjs/toolkit'


const initialState = {
    question: quizData,
    currentQuestionIndex: 0
}


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {}
});


export default quizSlice.reducer