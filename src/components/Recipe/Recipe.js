import React, {Component, Fragment} from 'react';

class Recipe extends Component {
    state = {
        name: '',
        ingredients: [],
        description: ''
    };
    ingredient = {ingredient: '', amount: 0, units: ''};

    addIngredient = () => {
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


    render() {
        console.log(this.state.ingredients);
        const formIngredientElements = this.state.ingredients.map((ingredient, index) => {
            return <div key={index}>
                <label>
                    Ingredient:
                    <input type="text" name={'ingredient'} onChange={((event) => this.ingredientChangeHandler(event, index))}/>
                </label>
                <label>
                    Amount:
                    <input type="text" name={'amount'}
                           onChange={((event) => this.ingredientChangeHandler(event, index))}/>
                </label>
                <label>
                    Units:
                    <input type="text" name={'units'}
                           onChange={((event) => this.ingredientChangeHandler(event, index))}/>
                </label>
            </div>
        });

        return (
            <Fragment>
                <h1>Add Recipe</h1>

                <button onClick={(() => {
                    this.addIngredient()
                })}>Add Ingredient
                </button>

                <form>
                  <div>
                      <label>
                          Name:
                          <input type="text" name="name" onChange={this.changeHandler}/>
                      </label>
                  </div>

                    {formIngredientElements}

                    <div>
                        <label>
                            Description:
                            <textarea name="description" onChange={this.changeHandler} />
                        </label>
                    </div>
                </form>


            </Fragment>
        );
    }
}

export default Recipe;