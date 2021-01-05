import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

import CustomText from '../../components/CustomText';

const ProfileScreen = () => {
    return (
        <View style={styles.screen}>
            <CustomText>Profile Screen</CustomText>
        </View>
    );
};

export default ProfileScreen;
