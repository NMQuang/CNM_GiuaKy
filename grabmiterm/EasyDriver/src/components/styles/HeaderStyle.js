import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../themes';

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        padding: 10,
        elevation: 5,
        height: Metrics.navBarHeight
    },
    text: {
        ...Fonts.style.h4,
        color: Colors.snow,
    }
});
