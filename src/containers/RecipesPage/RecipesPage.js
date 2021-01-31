import React, {Component, Fragment} from 'react';

import classes from './RecipesPage.module.css';
import RecipesList from '../../components/RecipesList/RecipesList';
import RecipePreview from '../../components/RecipePreview/RecipePreview';
import Navigation from "../../components/Navigation/Navigation";
import axios from '../../axios-base';
import AuthContext from "../../context/authContext";

class RecipesPage extends Component {
    static contextType = AuthContext;

    state = {
        previewedRecipe: null,
        recipesData: []
    };

    recipesNavProps = [
        {
            title: 'Add',
            path: '/add-recipe'
        }
    ];

    componentDidMount() {
        const url = '/recipes/' + this.context.user.userId + '.json?auth=' + this.context.user.token;

        axios.get(url)
            .then((results) => {
                const fetchedData = [];

                for (let key in results.data) {
                    fetchedData.push(results.data[key]);
                }

                this.setState({recipesData: fetchedData, previewedRecipe: fetchedData[0]})
            })
            .catch((err) => {
                console.log(err);
            })
    }

    previewRecipe = (index) => {
        this.setState({previewedRecipe: this.state.recipesData[index]})
    };

    render() {
        return (
            <Fragment>
                <h1>Recipes</h1>
                <div className={classes.GridContainer}>
                    <div className={classes.RecipesList}>
                        <div><Navigation navProps={this.recipesNavProps}/></div>
                        {
                            this.state.recipesData.length ?
                                <RecipesList recipes={this.state.recipesData} previewRecipe={this.previewRecipe}/>
                                : <div>You still haven't added any recipes</div>
                        }
                    </div>
                    <div className={classes.RecipePreview}>
                        {this.state.previewedRecipe ?
                            <RecipePreview recipe={this.state.previewedRecipe}/>
                            : <div>Select recipe</div>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RecipesPage;

