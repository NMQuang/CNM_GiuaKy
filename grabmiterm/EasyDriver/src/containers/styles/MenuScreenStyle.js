import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../themes/';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 10
    },
    input: {
        backgroundColor: Colors.snow,
        color: Colors.dark,
        height: 50,
        alignItems: 'stretch',
        marginBottom: 10
    },
    btnSignInOut: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: Colors.snow,
        padding: 10
    },
    btnSignInOutText: {
        color: Colors.primary,
        ...Fonts.style.h6
    },
    userText: {
        ...Fonts.style.h4,
        color: Colors.snow
    }
});
