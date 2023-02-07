import { useEffect, useState } from "react";

export const Settings = () => {
  const [options, setOptions] = useState<any>([]);

  const apiURL = 'https://opentdb.com/api_category.php';

  const fetchOptions = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setOptions(data.trivia_categories);
  };
  useEffect(() => {
    fetchOptions();
  }, []);
  
  return (
    <div className="settings">
      <div>
      <h3>Catégorie :</h3>
      <select name="category" id="category">
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      
      </div>
      <div>
      <h3>Nombre de questions :</h3>
      <input type="number" min="1" max="10" />
      </div>
      <div>
      <h3>Difficulté :</h3>
      <select name="difficulty" id="difficulty">
        <option value="easy">Facile</option>
        <option value="medium">Moyen</option>
        <option value="hard">Difficile</option>
      </select>
      </div>
    </div>
  )
}