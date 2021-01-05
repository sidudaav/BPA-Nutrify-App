import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Theme';

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    overviewContainer: {
        alignItems: 'center',
    },
    mealsContainer: {
        width: '100%',
        marginTop: 50,
    },
});

export default styles;
