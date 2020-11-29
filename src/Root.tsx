import React, { useEffect } from 'react';
import Router from './router';
import Context from './context';
import utilities from './helpers/utilities';
import { MetricsManager } from './core/metrics';
const getInitialScreen = async () => {
    const token = await utilities.getLocalData('token');
    return token ? 'Home' : 'Login';
}
const eventsHandler = async (eventName: string) => {
    await MetricsManager.onLogEvent(eventName)
}
const Root = () => {
    const initialScreen = getInitialScreen();
    useEffect(() => {
        eventsHandler('appSession');
    }, []);
    return (
        <Context>
            <Router initialScreen={initialScreen} />
        </Context>
    );
};

export default Root;
