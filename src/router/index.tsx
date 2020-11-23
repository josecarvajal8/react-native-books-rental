import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IRoute, routes_stack, routes_tab } from './routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {renderRoutesStack}
                <Stack.Screen name={'Home'} component={renderRoutesTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;