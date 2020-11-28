import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IRoute, routes_stack, routes_tab } from './routes';
import utilities from '../helpers/utilities';
import { TokenizerManager } from '../core/tokenizer';
import { LOGIN_PERSISTANCE } from '../context/flux/types';
import { useAppContext } from '../hooks';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const handleTokenSesion = async (dispatch: any) => {
    const token = await utilities.getLocalData('token');
    if (token) {
        const decodeData = TokenizerManager.decodeToken(token) || {};
        dispatch({ type: LOGIN_PERSISTANCE, payload: { ...decodeData, token } })
    }
}
const renderRoutesStack = routes_stack.map((route: IRoute, index: number) =>
    <Stack.Screen key={index} {...route} />
)
const renderRoutesTab = () => {
    return (
        <Tab.Navigator>
            {routes_tab.map((route: IRoute, index: number) =>
                <Tab.Screen key={index} {...route} />)}
        </Tab.Navigator>
    )
}
const renderInitialStack = (user: any) => {
    const { token = null } = { ...user };
    return (
        <>
            { token ?
                <>
                    <Stack.Screen name={'Home'} component={renderRoutesTab} options={{ headerShown: false }} />
                    {renderRoutesStack}
                </>
                :
                <>
                    {renderRoutesStack}
                    <Stack.Screen name={'Home'} component={renderRoutesTab} options={{ headerShown: false }} />
                </>
            }
        </>
    );
}
const Router = (props: any) => {
    const { initialScreen = 'Login' } = { ...props };
    const [state, dispatch] = useAppContext();
    useEffect(() => {
        handleTokenSesion(dispatch);
    }, [])
    const { user = {} } = { ...state }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen}>
                {renderRoutesStack}
                <Stack.Screen name={'Home'} component={renderRoutesTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;