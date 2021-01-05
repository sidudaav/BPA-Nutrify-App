import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const AppTabs = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <AppTabs.Navigator>
            <AppTabs.Screen name="Home" component={HomeNavigator} />
            <AppTabs.Screen
                name="Profile"
                component={ProfileNavigator}
            />
        </AppTabs.Navigator>
    );
};

export default AppNavigator;
