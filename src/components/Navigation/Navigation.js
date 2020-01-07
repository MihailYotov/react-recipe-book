import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const navigation = () => {
    return (
        <div className={classes.Navigation}>
            <ul >
                <li>
                    <NavLink
                        to="/"
                        exact
                        activeClassName={classes.active}
                        >Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/recipes-page"
                        exact
                        activeClassName={classes.active}
                        >Recipes
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default navigation;