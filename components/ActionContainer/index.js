import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

import CustomText from '../CustomText';

const ActionContainer = (props) => {
    return (
        <View style={styles.actionContainer}>
            <CustomText style={styles.actionName}>
                {props.title}
            </CustomText>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.actionIconContainer}
            >
                <Ionicons name="ios-add" size={50} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default ActionContainer;
