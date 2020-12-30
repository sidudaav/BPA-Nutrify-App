import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import axios from '../../../config/axios.config';

import NutrifyTitle from '../../../components/NutrifyTitle';
import AuthTextInput from '../../../components/AuthTextInput';
import StyledButton from '../../../components/StyledButton';

const ForgotPasswordScreen = (props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        const response = await axios.post(
            '/api/auth/forgot-password-confirmation-email',
            {
                email: email,
            },
        );

        props.navigation.push('ForgotPasswordConfirmation', {
            confirmationCode: response.data,
            email: email,
        });
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior="padding"
        >
            <View>
                <NutrifyTitle containerStyle={{ marginBottom: 30 }} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <AuthTextInput
                    iconName="ios-mail"
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <StyledButton title="CONTINUE" onPress={handleSubmit} />
        </KeyboardAvoidingView>
    );
};

export default ForgotPasswordScreen;
