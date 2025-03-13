import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import { Progress } from "@/components/ui/progress"


export default function QuizSummary() {
  const { question, userAnswer } = useAppSelector((state) => state.quiz);

  const correctAnswerCount = question.reduce((count, qna, index) => {
    return qna.correct_answer === userAnswer[index] ? count + 1 : count;
  }, 0);

  // console.log(correctAnswer);

  const correctParcent = parseFloat(((correctAnswerCount / question.length) * 100).toFixed());

  console.log(correctParcent)

  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>Quiz Summary</CardHeader>

        <CardContent>
          <h4>You Got {correctAnswerCount} Out Of {question.length}</h4>
          <br />
          <Progress value={correctParcent} />
          <br />
          <h1>Correct Answer: {correctAnswerCount} </h1>
        </CardContent>
      </Card>
    </div>
  );
}
