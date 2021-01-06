import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../constants/Theme';

import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const AppTabs = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <AppTabs.Navigator
            tabBarOptions={{
                activeTintColor: Colors.tertiaryGreen,
                showLabel: false,
            }}
        >
            <AppTabs.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Ionicons
                                name="md-home"
                                size={30}
                                color={
                                    props.focused ? 'green' : 'black'
                                }
                            />
                        );
                    },
                }}
            />
            <AppTabs.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Ionicons
                                name="md-person"
                                size={30}
                                color={
                                    props.focused ? 'green' : 'black'
                                }
                            />
                        );
                    },
                }}
            />
        </AppTabs.Navigator>
    );
};

export default AppNavigator;
