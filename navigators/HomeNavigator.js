import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            style={{
                                marginRight: 10,
                            }}
                            activeOpacity={0.6}
                        >
                            <Ionicons
                                name="ios-add-circle-outline"
                                size={30}
                                color="black"
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
