import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/Quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

export default function Question() {
  const dispatch = useAppDispatch();

  const { question, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );

  const currentQuestion = question[currentQuestionIndex];

  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };






  return (
    <>
      <div className="flex justify-center">
        <Card className="w-[550px]">
          <CardHeader>
            <CardDescription>
              Question {currentQuestionIndex + 1} Of {question.length}{" "}
            </CardDescription>
            <CardTitle> {currentQuestion.question} </CardTitle>
          </CardHeader>
          <CardContent>
            {currentQuestion.options.map((option, index) => (
              <Button
                onClick={() => handleAnswer(option)}
                size={"lg"}
                className="w-full mt-3"
                key={index}
                variant={currentAnswer === option ? "default" : "outline"}
              >
                {option}
              </Button>
            ))}
            <QuizControl></QuizControl>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
