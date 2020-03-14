import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './containers/partial/Header';
import Home from './containers/HomePage/HomePage';
import Recipes from './containers/RecipesPage/RecipesPage';
import PageNotFound from './components/Miscellaneous/PageNotFound';
import Recipe from './components/Recipe/Recipe';
import Register from './components/Authenticate/Register';
import Login from './components/Authenticate/Login';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path={'/recipes'} component={Recipes}/>
            <Route path={'/add-recipe'} component={Recipe}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/login'} component={Login}/>
            <Route component={PageNotFound} />
        </Switch>
    </div>
  );
}

export default App;
