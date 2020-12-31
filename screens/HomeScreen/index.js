import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import { useSelector } from 'react-redux';

import CustomText from '../../components/CustomText';
import ActionContainer from '../../components/ActionContainer';

const HomeScreen = (props) => {
    const { user } = useSelector((state) => state.auth);

    return (
        <ScrollView style={styles.screen}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                }}
            >
                <View style={styles.banner}>
                    <CustomText style={styles.bannerText}>
                        Hello {user.firstName}!
                    </CustomText>
                </View>
                <View style={styles.actionRow}>
                    <ActionContainer title="Add Meal" />
                    <ActionContainer title="Add Drink" />
                </View>
                <View style={styles.actionRow}>
                    <ActionContainer title="Add Fruits" />
                    <ActionContainer title="Add Snack" />
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
