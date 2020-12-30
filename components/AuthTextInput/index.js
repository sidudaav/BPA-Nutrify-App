import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const AuthTextInput = (props) => {
    return (
        <View>
            <Ionicons
                name={props.iconName}
                size={props.iconSize || 24}
                color="black"
                style={{
                    position: 'absolute',
                    bottom: 18,
                    left: 4,
                    ...props.iconStyles,
                }}
            />
            <TextInput
                {...props}
                style={{ ...styles.input, ...props.textInputStyle }}
            />
        </View>
    );
};

export default AuthTextInput;
