import React from 'react';
import Router from './router';
import Context from './core/context';

const Root = () => {
    return (
        <Context>
            <Router />
        </Context>
    );
};

export default Root;
