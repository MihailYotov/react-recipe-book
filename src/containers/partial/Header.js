import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import AuthContext from '../../context/authContext';

const header = () => {
    const navProps = [
        {
            title: 'Home',
            path: '/'
        },

    ];

    return (
        <AuthContext.Consumer>
            {context => {
                let showNavProps;

                if (context.user && context.user.userId) {
                    showNavProps = [
                        ...navProps,
                        {
                            title: 'Recipes',
                            path: '/recipes'
                        },
                        {
                            title: 'Logout',
                            function: context.actions.logout,
                            style: {float: 'right'}
                        }
                    ]

                } else {
                    showNavProps = [
                        ...navProps,
                        {
                            title: 'Login',
                            path: '/login',
                            style: {float: 'right'}
                        },
                        {
                            title: 'Register',
                            path: '/register',
                            style: {float: 'right'}
                        }
                    ]
                }

                return (
                    <div>
                        <Navigation navProps={showNavProps}/>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    );
};

export default header;