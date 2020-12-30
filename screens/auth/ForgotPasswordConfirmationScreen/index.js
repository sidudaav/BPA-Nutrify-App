import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import axios from '../../../config/axios.config';

import NutrifyTitle from '../../../components/NutrifyTitle';
import AuthTextInput from '../../../components/AuthTextInput';
import StyledButton from '../../../components/StyledButton';
import CustomText from '../../../components/CustomText';

const ForgotPasswordConfirmationScreen = (props) => {
    const [enteredCode, setEnteredCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const { confirmationCode, email } = props.route.params;

    const handleSubmit = async () => {
        if (
            enteredCode == confirmationCode &&
            newPassword === confirmedPassword
        ) {
            const response = await axios.post(
                '/api/auth/reset-password',
                {
                    newPassword: newPassword,
                    email: email,
                },
            );

            if (response.data) {
                props.navigation.push('Login');
            }
        }
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
                <AuthTextInput
                    iconName="ios-key"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="New Password"
                    autoComplete="off"
                    secureTextEntry={true}
                />
                <AuthTextInput
                    iconName="ios-key"
                    value={confirmedPassword}
                    onChangeText={setConfirmedPassword}
                    placeholder="Confirm Password"
                    autoComplete="off"
                    secureTextEntry={true}
                />
            </View>
            <StyledButton
                title="RESET PASSWORD"
                onPress={handleSubmit}
            />
        </KeyboardAvoidingView>
    );
};

export default ForgotPasswordConfirmationScreen;
