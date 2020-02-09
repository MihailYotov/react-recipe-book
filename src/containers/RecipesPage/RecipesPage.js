import React, {Component, Fragment} from 'react';

import classes from './RecipesPage.module.css';
import RecipesList from '../../components/RecipesList/RecipesList';
import RecipePreview from '../../components/RecipePreview/RecipePreview';
import Navigation from "../../components/Navigation/Navigation";

class RecipesPage extends Component {
    recipesData = [
        {
            id: 0,
            name: 'Soup',
            ingredients: [
                {ingredient: 'carrot', amount: 1, units: 'pcs'},
                {ingredient: 'onion', amount: 1, units: 'pcs'},
                {ingredient: 'pepper', amount: 1, units: 'pcs'},
                {ingredient: 'garlic', amount: 1, units: 'pcs'},
                {ingredient: 'tomato', amount: 1, units: 'pcs'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 1,
            name: 'Salad',
            ingredients: [
                {ingredient: 'carrot', amount: 1, units: 'pcs'},
                {ingredient: 'onion', amount: 1, units: 'pcs'},
                {ingredient: 'pepper', amount: 1, units: 'pcs'},
                {ingredient: 'garlic', amount: 1, units: 'pcs'},
                {ingredient: 'tomato', amount: 1, units: 'pcs'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            name: 'Roast',
            ingredients: [
                {ingredient: 'carrot', amount: 1, units: 'pcs'},
                {ingredient: 'onion', amount: 1, units: 'pcs'},
                {ingredient: 'Meat', amount: 0.5, units: 'kg'},
                {ingredient: 'garlic', amount: 1, units: 'pcs'},
                {ingredient: 'tomato', amount: 1, units: 'pcs'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 3,
            name: 'Spaghetti',
            ingredients: [
                {ingredient: 'spaghetti', amount: 1, units: 'box'},
                {ingredient: 'onion', amount: 1, units: 'pcs'},
                {ingredient: 'carrot', amount: 1, units: 'pcs'},
                {ingredient: 'garlic', amount: 1, units: 'pcs'},
                {ingredient: 'tomato souse', amount: 1, units: 'can'},
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },

    ];

    recipesNavProps = [
        {
            title: 'Add',
            path: '/add-recipe'
        }
    ];

    state = {
        previewedRecipe: this.recipesData[0]
    };

    previewRecipe = (index) => {
        this.setState({previewedRecipe: this.recipesData[index]})
    };

    render() {
        return (
            <Fragment>
                <h1>Recipes</h1>
                <div className={classes.GridContainer}>
                    <div className={classes.RecipesList}>
                        <div><Navigation navProps={this.recipesNavProps}/></div>
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

