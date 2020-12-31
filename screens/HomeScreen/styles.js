import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Theme';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        backgroundColor: Colors.secondaryGreen,
        width: '90%',
        paddingVertical: 20,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        marginBottom: 50,
    },
    bannerText: {
        color: Colors.darkWhite,
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold',
    },
    actionRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default styles;
