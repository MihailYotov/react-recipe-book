import React from 'react';

import classes from './RecipesList.module.css';

const RecipesList = (props) => {
    const recipesList = props.recipes.map((recipe, index) => {
        return(
            <li key={index} className={classes.RecipeListItem} onClick={() => props.previewRecipe(index)}>{recipe.name}</li>
        )
    });

    return (
        <ul className={classes.RecipeList}>
            {recipesList}
        </ul>
    )
};

export default RecipesList;