import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';

/*
    Device storage is a layer above the AsyncStorage. We use device storage because it allows to call functions
    to do stuff to AsyncStorage very easily.
*/
const deviceStorage = {
    // Save any key value into our AsyncStorages
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    // Load the JWT stored as well as weather or not it is expired
    async loadJWT() {
        try {
            const value = await AsyncStorage.getItem('jwt');

            if (!value) {
                return [null, true];
            }

            const decodedValue = jwt_decode(value);
            let expired = false;
            if (Date.now() >= decodedValue.exp * 1000) {
                expired = true;
            }

            return [value, expired];
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
};

export default deviceStorage;
