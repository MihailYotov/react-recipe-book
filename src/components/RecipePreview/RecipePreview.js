import React, {Fragment} from 'react';
import classes from './RecipePreview.module.css';

const RecipePreview = (props) => {
    const ingredientList = props.recipe.ingredients && props.recipe.ingredients.map((ingredient, index) => {
        return <tr key={index}>
            <td>{ingredient.ingredient}</td>
            <td>{ingredient.amount}</td>
            <td>{ingredient.units}</td>
        </tr>
    });

    return (
        <Fragment>
            <h2 className={classes.h2}>{props.recipe.name}</h2>
            <table className={classes.Table}>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Amount</th>
                        <th>Units</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredientList}
                </tbody>
            </table>
            <p>{props.recipe.description}</p>
        </Fragment>
    )
};

export default RecipePreview;