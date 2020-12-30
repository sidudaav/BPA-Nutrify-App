import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const StyledButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.6}
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default StyledButton;
