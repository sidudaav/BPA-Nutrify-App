import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import axios from '../../../config/axios.config';

import NutrifyTitle from '../../../components/NutrifyTitle';
import AuthTextInput from '../../../components/AuthTextInput';
import StyledButton from '../../../components/StyledButton';
import CustomText from '../../../components/CustomText';

const RegisterConfirmationScreen = (props) => {
    const [enteredCode, setEnteredCode] = useState('');
    const {
        confirmationCode,
        email,
        firstName,
        password,
    } = props.route.params;

    const handleSubmit = async () => {
        if (enteredCode == confirmationCode) {
            await axios.post('/api/auth/register', {
                email,
                firstName,
                password,
            });

            return props.navigation.push('Login');
        }

        setEnteredCode('');
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior="padding"
        >
            <View>
                <NutrifyTitle containerStyle={{ marginBottom: 30 }} />
            </View>
            <View style={{ width: '85%', marginBottom: 30 }}>
                <CustomText style={{ fontSize: 16 }}>
                    Please enter the five digit confirmation code we
                    sent to {email}
                </CustomText>
            </View>

            <View style={{ marginBottom: 30 }}>
                <AuthTextInput
                    iconName="ios-barcode"
                    value={enteredCode}
                    onChangeText={setEnteredCode}
                    placeholder="Confirmation Code"
                    autoComplete="off"
                    keyboardType="number-pad"
                />
            </View>
            <StyledButton
                title="FINISH REGISTERING!"
                onPress={handleSubmit}
            />
        </KeyboardAvoidingView>
    );
};

export default RegisterConfirmationScreen;
