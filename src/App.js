import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import Header from './containers/partial/Header';
import Home from './containers/HomePage/HomePage';
import Recipes from './containers/RecipesPage/RecipesPage';
// import PageNotFound from './components/Miscellaneous/PageNotFound';
import Recipe from './components/Recipe/Recipe';
import Register from './components/Authenticate/Register';
import Login from './components/Authenticate/Login';
import AuthContext from "./context/authContext";

class App extends Component {
    static contextType = AuthContext;

    render() {
        let routes;

        if (this.context.user && this.context.user.userId) {
            routes = (
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path={'/recipes'} component={Recipes}/>
                    <Route path={'/add-recipe'} component={Recipe}/>
                    {/*<Route component={PageNotFound}/>*/}
                    <Redirect to={'/'}/>
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path={'/register'} component={Register}/>
                    <Route path={'/login'} component={Login}/>
                    {/*<Route component={PageNotFound}/>*/}
                    <Redirect to={'/'}/>
                </Switch>
            )
        }

        return (
            <div className="App">
                <Header/>
                {routes}
            </div>

        );
    }
}

export default App;
