import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Navigator = () => {
    const authState = useSelector((state) => state.auth);

    if (authState.user) {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="App"
                        component={AppNavigator}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="AuthStack"
                    component={AuthNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
