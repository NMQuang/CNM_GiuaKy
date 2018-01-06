import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../themes/';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        paddingBottom: Metrics.baseMargin
    },
    map: {
        top: Metrics.navBarHeight,
        height: 
            Metrics.mapHeight,
        width: Metrics.screenWidth
    }
});
