import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import axios from '../../../config/axios.config';

import NutrifyTitle from '../../../components/NutrifyTitle';
import AuthTextInput from '../../../components/AuthTextInput';
import StyledButton from '../../../components/StyledButton';

const RegisterScreen = (props) => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const response = await axios.post(
            '/api/auth/register-confirmation-email',
            {
                email,
                firstName,
            },
        );

        props.navigation.push('RegisterConfirmation', {
            confirmationCode: response.data,
            email,
            firstName,
            password,
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
                    iconName="ios-person"
                    placeholder="First Name"
                    onChangeText={setFirstName}
                    value={firstName}
                />
                <AuthTextInput
                    iconName="ios-mail"
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />
                <AuthTextInput
                    iconName="ios-key"
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />
            </View>
            <StyledButton title="REGISTER" onPress={handleRegister} />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
