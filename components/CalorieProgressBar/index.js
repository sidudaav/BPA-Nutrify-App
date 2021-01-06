import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';

import { Colors } from '../../constants/Theme';
import CustomText from '../CustomText';

const getConsumedCalories = (meals) => {
    let consumedCalories = 0;
    meals.forEach((meal) => {
        meal.foods.forEach((food) => {
            consumedCalories += food.calories;
        });
    });

    return consumedCalories;
};

const CalorieProgessBar = (props) => {
    const { user } = useSelector((state) => state.auth);
    const { meals } = props;

    const consumedCalories = getConsumedCalories(meals);

    return (
        <View style={styles.centeredContainer}>
            <Progress.Bar
                progress={consumedCalories / user.calorieGoal}
                width={200}
                color={Colors.tertiaryGreen}
            />

            <View style={styles.textContainer}>
                <CustomText style={styles.consumedNumber}>
                    {consumedCalories}
                </CustomText>
                <CustomText style={styles.totalCaloriesText}>
                    Of {user.calorieGoal} Calories
                </CustomText>
            </View>
        </View>
    );
};

export default CalorieProgessBar;
