import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './containers/partial/Header';
import Home from './components/HomePage/HomePage';
import Recipes from './containers/Recipes/Recipes';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path={'/recipes'} component={Recipes}/>
            <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
