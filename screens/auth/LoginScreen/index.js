import React, { useState, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';

import jwt_decode from 'jwt-decode';

import axios from '../../../config/axios.config';
import deviceStorage from '../../../config/deviceStorage.config';

import * as authActions from '../../../store/actions/auth';
import { useDispatch } from 'react-redux';

import CustomText from '../../../components/CustomText';
import NutrifyTitle from '../../../components/NutrifyTitle';
import AuthTextInput from '../../../components/AuthTextInput';
import StyledButton from '../../../components/StyledButton';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        const initialState = async () => {
            const [jwt, expired] = await deviceStorage.loadJWT();

            if (!expired) {
                const decodedJWT = await jwt_decode(jwt);
                const response = await axios.get(
                    `/api/users/${decodedJWT.user._id}`,
                );
                return dispatch(
                    authActions.login(response.data, jwt),
                );
            }
        };
        initialState();
    }, []);

    const handleLogin = async () => {
        const response = await axios.post('/api/auth/login', {
            email: email,
            password: password,
        });

        let jwt, user;
        if (response.data) {
            jwt = response.data.jwt;
            user = response.data.user;
        }

        if (jwt) {
            await deviceStorage.saveItem('jwt', jwt);
            return dispatch(authActions.login(user, jwt));
        }
        setPassword('');
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior="padding"
        >
            <View>
                <NutrifyTitle containerStyle={{ marginBottom: 30 }} />
            </View>
            <View>
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
            <TouchableOpacity
                style={styles.forgotPasswordContainer}
                activeOpacity={0.6}
                onPress={() =>
                    props.navigation.push('ForgotPassword')
                }
            >
                <CustomText style={styles.forgotPasswordText}>
                    Forgot Password?
                </CustomText>
            </TouchableOpacity>

            <StyledButton title="LOGIN" onPress={handleLogin} />
            <View style={styles.signUpContainer}>
                <CustomText>Don't Have An Account?</CustomText>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => props.navigation.push('Register')}
                >
                    <CustomText style={styles.signUpText}>
                        Sign Up Here
                    </CustomText>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
