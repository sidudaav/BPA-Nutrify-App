import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Theme';

const colors = StyleSheet.create({
    mealContainer: {
        width: '100%',
        marginBottom: 30,
    },
    mealInfoContainer: {
        flexDirection: 'row',
        paddingLeft: 25,
        marginBottom: 15,
    },
    mealName: {
        color: Colors.tertiaryGreen,
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold',
    },
    mealCalories: {
        color: Colors.tertiaryGreen,
        position: 'absolute',
        right: 25,
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold',
    },
    foodInfoContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.darkWhite,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        borderBottomWidth: 1,
    },
    foodCalories: {
        position: 'absolute',
        right: 25,
        top: 15,
    },
});

export default colors;
