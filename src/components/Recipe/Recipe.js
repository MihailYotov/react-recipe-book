import React, {Component, Fragment} from 'react';
import classes from './Recipe.module.css';
import axios from '../../axios-base';
import AuthContext from "../../context/authContext";

class Recipe extends Component {
    static contextType = AuthContext;

    state = {
        name: '',
        ingredients: [],
        description: ''
    };
    ingredient = {ingredient: '', amount: 0, units: ''};

    addIngredient = (event) => {
        event && event.preventDefault();
        const ingredients = [...this.state.ingredients, this.ingredient];
        this.setState({ingredients: ingredients})
    };

    ingredientChangeHandler = (event, index) => {
        const ingredients = [...this.state.ingredients];
        ingredients[index][event.target.name] = event.target.value;
        this.setState({ingredients: ingredients})
    };

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    submitRecipe = (event) => {
        event && event.preventDefault();
        const url = '/recipes/' + this.context.user.userId + '.json';

        axios.post(url, this.state)
            .then(() => {
                this.props.history.push("/recipes");
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {
        const formIngredientElements = this.state.ingredients.map((ingredient, index) => {
            return <div key={index} className={classes.IngredientsFieldset}>
                <div>
                    <label>Ingredient:</label>
                    <input type="text" name={'ingredient'}
                           onChange={((event) => this.ingredientChangeHandler(event, index))}/>
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" name={'amount'}
                           onChange={((event) => this.ingredientChangeHandler(event, index))}/>
                </div>
                <div>
                    <label>Units:</label>
                    <input type="text" name={'units'}
                           onChange={((event) => this.ingredientChangeHandler(event, index))}/>
                </div>
            </div>
        });

        return (
            <Fragment>
                <h1>Add Recipe</h1>

                <form onSubmit={this.submitRecipe} className={classes.RecipeFrom}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id={'name'} onChange={this.changeHandler}/>

                    <label>Description:</label>
                    <textarea name="description" onChange={this.changeHandler}/>

                    <button
                        className={classes.FormButton}
                        onClick={((event) => {
                            this.addIngredient(event)
                        })}>Add Ingredient
                    </button>

                    {formIngredientElements}

                    <button type={"submit"} className={classes.FormButton}>Save</button>
                </form>
            </Fragment>
        );
    }
}

export default Recipe;