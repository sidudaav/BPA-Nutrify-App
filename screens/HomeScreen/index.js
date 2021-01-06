import React, { useCallback, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

import styles from './styles';
import { useSelector } from 'react-redux';

import { getMealsForDate } from '../../utils/date.utils';

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';

import axios from '../../config/axios.config';

import MealsDisplay from '../../components/MealsDisplay';
import ProteinCarbsFatDisplay from '../../components/ProteinCarbsFatDisplay';
import CalorieProgessBar from '../../components/CalorieProgressBar';

const HomeScreen = (props) => {
    const [refreshing, setRefreshing] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const onRefresh = useCallback(async () => {
        const response = await axios.get(`/api/users/${user._id}`);

        dispatch(authActions.updateUser(response.data));
    });

    let currentDayMeals = getMealsForDate(user, new Date());

    return (
        <ScrollView
            contentContainerStyle={styles.screen}
            style={{ backgroundColor: 'white' }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View style={styles.overviewContainer}>
                <CalorieProgessBar meals={currentDayMeals} />
                <ProteinCarbsFatDisplay meals={currentDayMeals} />
            </View>
            <View style={styles.mealsContainer}>
                <MealsDisplay meals={currentDayMeals} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
