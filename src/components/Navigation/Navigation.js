import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const navigation = (props) => {
    const listItems = props.navProps.map((item, index) => {
        return(
            <li key={index}>
                <NavLink
                    to={item.path}
                    exact
                    activeClassName={classes.active}
                >{item.title}
                </NavLink>
            </li>
        )
    });

    return (
        <div className={classes.Navigation}>
            <ul >
                {listItems}
            </ul>
        </div>
    )
};

export default navigation;