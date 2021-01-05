import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { useSelector } from 'react-redux';

import CustomText from '../../components/CustomText';
import MealsDisplay from '../../components/MealsDisplay';

const HomeScreen = (props) => {
    const { user } = useSelector((state) => state.auth);
    const { meals } = user;

    return (
        <ScrollView
            contentContainerStyle={styles.screen}
            style={{ backgroundColor: 'white' }}
        >
            <View>
                <CustomText>{user.consumedCalories}</CustomText>
                <CustomText>
                    Of {user.calorieGoal} Calories
                </CustomText>
            </View>
            <View style={styles.mealsContainer}>
                <MealsDisplay meals={meals} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
