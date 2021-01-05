import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import CustomText from '../CustomText';

const MealsDisplay = (props) => {
    const { meals } = props;

    const displayFoodTable = (meal) => {
        return meal.foods.map((food) => {
            return (
                <View key={food._id} style={styles.foodInfoContainer}>
                    <CustomText>{food.name}</CustomText>
                    <CustomText style={styles.foodCalories}>
                        {food.calories} Calories
                    </CustomText>
                </View>
            );
        });
    };

    return meals.map((meal) => {
        let mealCalories = 0;
        meal.foods.forEach((food) => {
            mealCalories += food.calories;
        });

        return (
            <View key={meal._id} style={styles.mealContainer}>
                <View style={styles.mealInfoContainer}>
                    <CustomText style={styles.mealName}>
                        {meal.name}
                    </CustomText>
                    <CustomText style={styles.mealCalories}>
                        {mealCalories} Calories
                    </CustomText>
                </View>
                {displayFoodTable(meal)}
            </View>
        );
    });
};

export default MealsDisplay;
