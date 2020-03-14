import React from 'react';

import Navigation from '../../components/Navigation/Navigation';


const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiationDate');
    localStorage.removeItem('userId');
};

const navProps = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Recipes',
        path: '/recipes'
    },
    {
        title: 'Logout',
        function: logout,
        style: {float: 'right'}
    },
    {
        title: 'Register',
        path: '/register',
        style: {float: 'right'}
    },
    {
        title: 'Login',
        path: '/login',
        style: {float: 'right'}
    }
];

const header = () => {
    return (
        <div>
            <Navigation navProps={navProps}/>
        </div>
    );
};

export default header;