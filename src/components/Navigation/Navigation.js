import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const navigation = (props) => {
    const listItems = props.navProps.map((item, index) => {
        return (
            <li key={index} style={item.style || {}}>
                <NavLink
                    to={item.path || ''}
                    exact
                    activeClassName={item.path && classes.active}>
                    {item.function ?
                        <div onClick={item.function}>
                            {item.title}
                        </div> : item.title
                    }
                </NavLink>
            </li>
        )
    });

    return (
        <div className={classes.Navigation}>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};

export default navigation;