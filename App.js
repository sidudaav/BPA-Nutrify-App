import 'react-native-gesture-handler';
import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppLoading from 'expo-app-loading';
import { loadFonts } from './config/fonts.config';

import rootReducer from './store/reducers/index';

import MainNavigator from './navigators';

const store = createStore(rootReducer);

export default function App() {
    if (!loadFonts()) {
        return <AppLoading />;
    }

    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
}
