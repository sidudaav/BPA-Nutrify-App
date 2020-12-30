import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondaryGreen,
        width: '85%',
        paddingVertical: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat_900Black',
        color: '#f4f4f4',
    },
});

export default styles;
