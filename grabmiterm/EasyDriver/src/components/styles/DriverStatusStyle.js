import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../themes';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary, 
        position: 'absolute', 
        top: Metrics.navBarHeight + Metrics.mapHeight, 
        height: Metrics.statusHeight, 
        width: Metrics.statusWidth
    },
    elevationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    connectContainer: {
        height: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: Colors.connectContainer
    },
    statusBlock: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 20
    },
    number: {
        fontSize: 33, 
        color: Colors.primary
    },
    text: {
        color: Colors.snow
    }
});
