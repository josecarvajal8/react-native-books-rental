import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Detail from '../components/detail';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home} />
                <Stack.Screen name={'Detail'} component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;