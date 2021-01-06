import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { useSelector } from 'react-redux';

import CustomText from '../../components/CustomText';
import MealsDisplay from '../../components/MealsDisplay';
import ProteinCarbsFatDisplay from '../../components/ProteinCarbsFatDisplay';
import CalorieProgessBar from '../../components/CalorieProgressBar';

const HomeScreen = (props) => {
    const { user } = useSelector((state) => state.auth);
    const { meals } = user;

    return (
        <ScrollView
            contentContainerStyle={styles.screen}
            style={{ backgroundColor: 'white' }}
        >
            <View style={styles.overviewContainer}>
                <CalorieProgessBar meals={meals} />
                <ProteinCarbsFatDisplay meals={meals} />
            </View>
            <View style={styles.mealsContainer}>
                <MealsDisplay meals={meals} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
