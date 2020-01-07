import React, {Component, Fragment} from 'react';

import classes from './RecipesPage.module.css';
import RecipesList from '../../components/RecipesList/RecipesList';
import RecipePreview from '../../components/RecipePreview/RecipePreview';

class RecipesPage extends Component {
    recipesData = [
        {
            id: 0,
            name: 'Soup',
            ingredients: [
                {name: 'carrot', amount: 1, units: 'pcs'},
                {name: 'onion', amount: 1, units: 'pcs'},
                {name: 'pepper', amount: 1, units: 'pcs'},
                {name: 'garlic', amount: 1, units: 'pcs'},
                {name: 'tomato', amount: 1, units: 'pcs'},
            ]
        },{
            id: 1,
            name: 'Salad',
            ingredients: [
                {name: 'carrot', amount: 1, units: 'pcs'},
                {name: 'onion', amount: 1, units: 'pcs'},
                {name: 'pepper', amount: 1, units: 'pcs'},
                {name: 'garlic', amount: 1, units: 'pcs'},
                {name: 'tomato', amount: 1, units: 'pcs'},
            ]
        },{
            id: 2,
            name: 'Roast',
            ingredients: [
                {name: 'carrot', amount: 1, units: 'pcs'},
                {name: 'onion', amount: 1, units: 'pcs'},
                {name: 'Meat', amount: 0.5, units: 'kg'},
                {name: 'garlic', amount: 1, units: 'pcs'},
                {name: 'tomato', amount: 1, units: 'pcs'},
            ]
        },{
            id: 3,
            name: 'Spaghetti',
            ingredients: [
                {name: 'spaghetti', amount: 1, units: 'box'},
                {name: 'onion', amount: 1, units: 'pcs'},
                {name: 'carrot', amount: 1, units: 'pcs'},
                {name: 'garlic', amount: 1, units: 'pcs'},
                {name: 'tomato souse', amount: 1, units: 'can'},
            ]
        },

    ];

    state = {
        previewedRecipe: this.recipesData[0]
    };

    previewRecipe = (index) => {
        this.setState({previewedRecipe: this.recipesData[index]})
    };

    render() {
        console.log('render RecipesPage');
        return (
            <Fragment>
                <h1>Recipes</h1>
                <div className={classes.GridContainer}>
                    <div className={classes.RecipesList}>
                        <RecipesList recipes={this.recipesData} previewRecipe={this.previewRecipe}/>
                    </div>
                    <div className={classes.RecipePreview}>
                        <RecipePreview recipe={this.state.previewedRecipe}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RecipesPage;

