import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Button from './reusableComponents/Button';

const Search = () => {
    return(
        <form>
            <div className="formContainer">
                <input type="text" />
                <label>Recipe / Ingredient</label>
            </div>
            <Button />
        </form>
    );
};

export default Search;