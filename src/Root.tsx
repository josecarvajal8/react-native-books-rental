import React, { useEffect } from 'react';
import Router from './router';
import Context from './context';
import utilities from './helpers/utilities';
const getInitialScreen = async () => {
    const token = await utilities.getLocalData('token');
    return token ? 'Home' : 'Login';
}
const Root = () => {
    let initialScreen;
    useEffect(() => {
        initialScreen = getInitialScreen()
    }, [])
    return (
        <Context>
            <Router initialScreen={initialScreen} />
        </Context>
    );
};

export default Root;
