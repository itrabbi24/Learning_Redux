import { Button } from "@/components/ui/button";
import { nextQuestion, prevQuestion } from "@/redux/features/Quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function QuizControl() {
  const { question, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );

  const dispatch = useAppDispatch();

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handlePrevQuestion = () => {
    dispatch(prevQuestion());
  };


  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button disabled={currentQuestionIndex === 0} onClick={handlePrevQuestion}> Previous </Button>



      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerSelected} onClick={handleNextQuestion}>Next</Button>
      )}



      {
        currentQuestionIndex === question.length - 1 && (
          <Button className="bg-orange-700">Complete Quiz</Button>
        )
      }




    </div>
  );
}
