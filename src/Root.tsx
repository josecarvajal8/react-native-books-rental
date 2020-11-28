import React, { useEffect } from 'react';
import Router from './router';
import Context from './context';
import utilities from './helpers/utilities';
import { MetricsManager } from './core/metrics';
import analytics from '@react-native-firebase/analytics';
const getInitialScreen = async () => {
    const token = await utilities.getLocalData('token');
    return token ? 'Home' : 'Login';
}
const eventsHandler = async (eventName: string) => {
    await MetricsManager.onLogEvent(eventName)
    await analytics().logEvent('appSessionStart')
}

const Root = () => {
    let initialScreen;
    useEffect(() => {
        initialScreen = getInitialScreen()
        eventsHandler('appSession');
    }, []);
    return (
        <Context>
            <Router initialScreen={initialScreen} />
        </Context>
    );
};

export default Root;
