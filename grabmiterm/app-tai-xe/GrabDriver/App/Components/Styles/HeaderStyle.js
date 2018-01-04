import { Metrics, Colors, Fonts } from '../../Themes'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        padding: 10,
        elevation: 5
    },
    text: {
        ...Fonts.style.h4,
        color: Colors.snow,
    }
});
