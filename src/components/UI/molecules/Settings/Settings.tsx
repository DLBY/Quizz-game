import { Button, questionAtom } from "@/components";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
// import { useAtomsDebugValue } from 'jotai-devtools'

// const DebugAtoms = () => {
//   useAtomsDebugValue()
//   return null
// }

export const Settings = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<any>([]);
  const [questionCategory, setQuestionCategory] = useAtom(questionAtom);
  const [questionNumber, setQuestionNumber] = useAtom(questionAtom);
  const [questionDifficulty, setQuestionDifficulty] = useState<any>([]);

  const apiURL = 'https://opentdb.com/api_category.php';

  const fetchOptions = async () => {
    setIsLoading(true);
    const response = await fetch(apiURL);
    const data = await response.json();
    setOptions(data.trivia_categories);
    setIsLoading(false);
  };

  const fetchQuestions = async () => {
    const apiURL = `https://opentdb.com/api.php?amount=${questionNumber}&category=${questionCategory}&difficulty=${questionDifficulty}&type=multiple`;
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleCategory = (e: any) => {
    setQuestionCategory((prev) => ({
      ...prev,
      category: e.target.value,
    }));
    console.log(questionCategory);
  };

  const handleNumber = (e: any) => {
    setQuestionNumber((prev) => ({
      ...prev,
      number: e.target.value,
    }));
    setQuestionNumber(e.target.value);
    console.log(questionNumber);
  };

  const handleDifficulty = (e: any) => {
    setQuestionDifficulty(e.target.value);
  };
  if (!isLoading) {
    return (
      <>
        {/* <DebugAtoms /> */}
        <div className="settings">
          <div>
            <h3>Catégorie :</h3>
            <select name="category" id="category" onChange={handleCategory}>
              {options.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3>Nombre de questions :</h3>
            <input type="number" min="1" max="10" onChange={handleNumber} />
          </div>
          <div>
            <h3>Difficulté :</h3>
            <select name="difficulty" id="difficulty" onChange={handleDifficulty}>
              <option value="easy" key="easy">Facile</option>
              <option value="medium" key="medium">Moyen</option>
              <option value="hard" key="hard">Difficile</option>
            </select>
          </div>
        </div>
        <Button className={clsx(
          'bg-green-secondary self-end lg:self-auto px-4 py-3 text-lg ',
          'lg:self-auto lg:order-last'
        )} onClick={fetchQuestions}>Commencer</Button>
      </>
    )
  } else {
    return (
      <div className="settings">
        <h2>Chargement...</h2>
      </div>
    )
  }
}