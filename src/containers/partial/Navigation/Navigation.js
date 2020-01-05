import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navigation.module.css';

const navigation = () => {
    return (
        <div className={style.Navigation}>
            <ul >
                <li>
                    <NavLink
                        to="/"
                        exact
                        activeClassName={style.active}
                        >Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/recipes"
                        exact
                        activeClassName={style.active}
                        >Recipes
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default navigation;