import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import RegisterConfirmationScreen from '../screens/auth/RegisterConfirmationScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ForgotPasswordConfirmationScreen from '../screens/auth/ForgotPasswordConfirmationScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerBackTitleStyle: {
                    display: 'none',
                },
            }}
        >
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerLeft: null,
                }}
            />
            <AuthStack.Screen
                name="Register"
                component={RegisterScreen}
            />
            <AuthStack.Screen
                name="RegisterConfirmation"
                component={RegisterConfirmationScreen}
            />
            <AuthStack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />
            <AuthStack.Screen
                name="ForgotPasswordConfirmation"
                component={ForgotPasswordConfirmationScreen}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
