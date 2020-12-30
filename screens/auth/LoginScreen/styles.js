import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    forgotPasswordContainer: {
        width: '85%',
        alignItems: 'flex-end',
        marginVertical: 30,
    },
    forgotPasswordText: {
        color: Colors.secondaryGreen,
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    signUpText: {
        color: Colors.secondaryGreen,
        marginLeft: 20,
    },
});

export default styles;
