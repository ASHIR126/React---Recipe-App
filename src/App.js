import React, { useState, useEffect } from 'react';
import "./App.css"
import Recipe from './Recipe';
export default function App() {

  const APP_ID = "ed076256";
  const APP_KEY = "84bd8b57a85781a3d86cc49dec78e24a";

  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('chiken');

  useEffect(() => {
    getRecipe();

  }, [query])

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits)
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(input)
  }

  return (
    <div className="App">
      <form className='search-form' onSubmit={submitHandler}>
        <input type="text" className='search-bar' value={input} onChange={inputHandler} />
        <button className='search-btn' type='submit'>Search</button>
      </form>
      <div className='recipe'>
        {
          recipes.map(recipe => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredientLines={recipe.recipe.ingredientLines}
              img={recipe.recipe.image}
            />
          ))
        }
      </div>
    </div>
  );
}