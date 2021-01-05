import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import { FontAwesome5 } from '@expo/vector-icons';

import CustomText from '../CustomText';

const getProteinCarbsFat = (meals) => {
    let protein = 0,
        fat = 0,
        carbs = 0;
    meals.forEach((meal) => {
        meal.foods.forEach((food) => {
            protein += food.protein;
            carbs += food.carbs;
            fat += food.fat;
        });
    });

    return {
        protein,
        fat,
        carbs,
    };
};

const ProteinCarbsFatDisplay = (props) => {
    const { meals } = props;
    const { protein, fat, carbs } = getProteinCarbsFat(meals);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <FontAwesome5
                    name="fish"
                    size={36}
                    color="#FF3333"
                    style={styles.infoIcon}
                />
                <CustomText style={styles.infoNumber}>
                    {protein}g
                </CustomText>
                <CustomText style={styles.infoType}>
                    Protein
                </CustomText>
            </View>
            <View style={styles.infoContainer}>
                <FontAwesome5
                    name="bread-slice"
                    size={36}
                    color="#4DBD33"
                    style={styles.infoIcon}
                />
                <CustomText style={styles.infoNumber}>
                    {carbs}g
                </CustomText>
                <CustomText style={styles.infoType}>Carbs</CustomText>
            </View>
            <View style={styles.infoContainer}>
                <FontAwesome5
                    name="cheese"
                    size={36}
                    color="#0EBFE9"
                    style={styles.infoIcon}
                />
                <CustomText style={styles.infoNumber}>
                    {fat}g
                </CustomText>
                <CustomText style={styles.infoType}>Fat</CustomText>
            </View>
        </View>
    );
};

export default ProteinCarbsFatDisplay;
