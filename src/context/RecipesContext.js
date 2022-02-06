import React, { useState, useEffect, createContext } from "react";

export const RecipesContext = createContext();

export const RecipesState = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [firstRecipe, setFirstRecipe] = useState(0);
  const [lastRecipe, setLastRecipe] = useState(9);
  const [isHidden, setIsHidden] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const APP_ID = "671c0149";
  const APP_KEY = "caedaf366a9666e48fb52703d246d6bc";
  const FIRST_REQ =
    "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9";
  const URL =
    "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${firstRecipe}&to=${lastRecipe}";

  const getFirstResult = async () => {
    setLoading(true);
    const response = await fetch(FIRST_REQ);
    const data = await response.json();
    setRecipes(data);
    setLoading(false);
  };

  const searchRecipes = async () => {
    setError(false);
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    if (search.trim() === "" && !data.more) {
      setLoading(false);
      setError(true);
      return;
    }
    setRecipes(data.hits);
    setLoading(false);
  };

  const getRecipes = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    setIsHidden(true);
    searchRecipes();
  };

  useEffect(() => {
    getFirstResult();
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        getRecipes,
        search,
        setSearch,
        isHidden,
        error,
        loading,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
