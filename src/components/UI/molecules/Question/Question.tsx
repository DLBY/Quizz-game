interface QuestionProps {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const Question = ({
  category,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}: QuestionProps) => {

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const answers = [correct_answer, ...incorrect_answers];
  const randomAnswers = answers.sort(() => getRandomInt(2) - 1);

  console.log(randomAnswers)
  return (
    <div>
      <h2>{category}</h2>
      <p>{question}</p>
      <p>{difficulty}</p>
      {/* put correct answer in random order */}
      <p>{correct_answer}</p>
      <p>{incorrect_answers}</p>
    </div>
  )
}