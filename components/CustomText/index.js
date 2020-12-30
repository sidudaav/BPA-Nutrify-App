import React from 'react';
import { Text, StyleSheet } from 'react-native';

import styles from './styles';

const CustomText = (props) => {
    return (
        <Text style={{ ...styles.text, ...props.style }}>
            {props.children}
        </Text>
    );
};

export default CustomText;
