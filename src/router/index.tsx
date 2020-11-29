import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IRoute, routes_stack, routes_tab, tabsIcons } from './routes';
import utilities from '../helpers/utilities';
import { TokenizerManager } from '../core/tokenizer';
import { LOGIN_PERSISTANCE } from '../context/flux/types';
import { useAppContext } from '../hooks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
const renderIconTab = (props: any, name: string = 'Library') => {
    const _name = tabsIcons[name]
    const { size = 10, color = 'tomato' } = { ...props };
    return <FontAwesome name={_name} size={size} color={color} />
}
const getScreenOptions = (route: any) => {
    const { name = '' } = { ...route };
    return { tabBarIcon: (props: any) => renderIconTab(props, name) }

}
const renderRoutesTab = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => getScreenOptions(route)}>
            {routes_tab.map((route: IRoute, index: number) =>
                <Tab.Screen key={index} {...route} />)}
        </Tab.Navigator>
    )
}
const Router = (props: any) => {
    const { initialScreen = 'Login' } = { ...props };
    const [state, dispatch] = useAppContext();
    useEffect(() => {
        handleTokenSesion(dispatch);
    }, [])
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