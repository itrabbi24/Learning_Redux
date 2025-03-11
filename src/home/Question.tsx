import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";


export default function Question() {

  const { question, currentQuestionIndex } = useAppSelector(state => state.quiz);
  const currentQuestion = question[currentQuestionIndex];
  console.log(currentQuestion);


  return (
    <>
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>Question {currentQuestionIndex + 1} Of {question.length} </CardDescription>
        <CardTitle> {currentQuestion.question} </CardTitle>
      </CardHeader>
      <CardContent>
        {
          currentQuestion.options.map((option, index) => <Button size={"lg"} className="w-full mt-3" key={index}>{option}</Button>)
        }
      </CardContent>
      <CardFooter className="flex justify-between">
        Button are here
      </CardFooter>
    </Card>
    </>
  )
}
