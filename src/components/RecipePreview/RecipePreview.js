import React, {Fragment} from 'react';
import classes from './RecipePreview.module.css';

const RecipePreview = (props) => {
    const ingredientList = props.recipe.ingredients.map((ingredient, index) => {
        return <tr>
            <td>{ingredient.name}</td>
            <td>{ingredient.amount}</td>
            <td>{ingredient.units}</td>
        </tr>
    });

    return (
        <Fragment>
            <h2 className={classes.h2}>{props.recipe.name}</h2>
            <table className={classes.Table}>
                <th>Ingredient</th>
                <th>amount</th>
                <th>units</th>
                {ingredientList}
            </table>
        </Fragment>
    )
};

export default RecipePreview;