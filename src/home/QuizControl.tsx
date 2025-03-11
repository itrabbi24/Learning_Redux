import { Button } from "@/components/ui/button";
import { nextQuestion, prevQuestion } from "@/redux/features/Quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function QuizControl() {

  const dispatch = useAppDispatch();

  const handleNextQuestion = () =>{
    dispatch(nextQuestion());
  }

  const handlePrevQuestion = () =>{
    dispatch(prevQuestion());
  }


  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button onClick={handlePrevQuestion}>Previous</Button>
      <Button onClick={handleNextQuestion}>Next</Button>
    </div>
  )
}
