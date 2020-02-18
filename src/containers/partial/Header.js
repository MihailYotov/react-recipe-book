import React from 'react';

import Navigation from '../../components/Navigation/Navigation';

const navProps = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Recipes',
        path: '/recipes'
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