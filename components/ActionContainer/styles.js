import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Theme';

const styles = StyleSheet.create({
    actionContainer: {
        width: '40%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.secondaryGreen,
        borderWidth: 5,
        borderRadius: 10,
        marginBottom: 30,
        backgroundColor: Colors.darkWhite,
    },
    actionName: {
        fontSize: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: Colors.tertiaryGreen,
        marginBottom: 10,
    },
    actionIconContainer: {
        backgroundColor: Colors.secondaryGreen,
        borderRadius: 10,
    },
});

export default styles;
