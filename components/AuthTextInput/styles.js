import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants/Theme';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    input: {
        width: width * 0.85,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        paddingVertical: 18,
        paddingHorizontal: 18,
        paddingLeft: 44,
        borderBottomColor: Colors.primaryGreen,
        borderBottomWidth: 4,
    },
});

export default styles;
