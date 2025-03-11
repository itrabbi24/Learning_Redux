import './App.css'
import Question from './home/Question'
import QuizSummary from './home/QuizSummary';
import { useAppSelector } from './redux/hooks'


function App() {


  const {quizComplete} = useAppSelector((state)=> state.quiz);


  return (
    <>
    <h3 className='text-center text-5xl my-12'>Quiz Apps</h3>
      {/* <Question></Question> */}

      {!quizComplete? <Question></Question> : <QuizSummary></QuizSummary>}

    </>
  )
}

export default App
