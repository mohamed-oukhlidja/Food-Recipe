import React, { component, useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "8535379f";
  const APP_KEY = "e29716573ff77bb3b6cb2abd39fd8753";

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query , setQuery] = useState('')

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
  };
const updateSearch = e => 
{
  setSearch(e.target.value);
  

}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch ('');

}

  return (
    <div className="App">
      <form onSubmit ={getSearch} className="search_form">
        <input
          type="text"
          name="search_query"
          className="search_bar"
          id="search_query"
          value = {search}
          onChange = {updateSearch}
        />
        <input type="submit" className="search_btn" value="Search" />
      </form>
      <div className= "recipes">
      {recipes.map((recipe) => (
        <Recipe
        key = {recipe.recipe.label}
          title={recipe.recipe.label}
          calories={(recipe.recipe.calories).toFixed(2)}
          img={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
