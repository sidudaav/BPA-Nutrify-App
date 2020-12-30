import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const NutrifyTitle = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...props.containerStyle,
            }}
        >
            <Text style={{ ...styles.text, ...props.style }}>
                NUTRI
            </Text>
            <Text
                style={{
                    ...styles.text,
                    ...styles.coloredText,
                    ...props.style,
                    ...props.coloredTextStyle,
                }}
            >
                FY
            </Text>
        </View>
    );
};

export default NutrifyTitle;
