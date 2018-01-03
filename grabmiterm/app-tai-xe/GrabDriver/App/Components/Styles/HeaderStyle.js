import { Metrics, Colors, Fonts } from '../../Themes'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        padding: 10,
        elevation: 5
    },
    text: {
        fontSize: Fonts.size.h4,
        color: Colors.snow,
    }
});
