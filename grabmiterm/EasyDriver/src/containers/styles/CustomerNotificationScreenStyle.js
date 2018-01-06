import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../themes/';

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        backgroundColor: Colors.secondary,
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    },
    costContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 10
    },
    cost1: {
        color: Colors.snow,
        fontSize: 30
    },
    vehicleType: {
        color: Colors.snow
    },
    infoContainer: {
        height: (Metrics.screenHeight * 2) / 3,
        backgroundColor: Colors.snow,
        elevation: 5,
        borderRadius: 5
    },
    topInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.silver,
        paddingVertical: 15,
        borderRadius: 5
    },
    infoText: {
        color: Colors.dark,
        fontSize: Fonts.size.h6
    },
    from: {
        height: Metrics.screenHeight / 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    to: {
        height: Metrics.screenHeight / 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: Colors.silver
    },
    footerInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: Colors.dark,
        fontSize: Fonts.size.h5,
        fontWeight: 'bold'
    },
    iconChervDown: {
        position: 'absolute', 
        height: 30, 
        width: 30, 
        borderRadius: 15, 
        top: (Metrics.screenHeight / 5) + 40, 
        left: (Metrics.screenWidth / 2) - 30, 
        backgroundColor: '#019687', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    acceptBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        marginTop: 10,
        borderRadius: 5,
        elevation: 5
    },
    acceptText: {
        color: Colors.snow,
        fontSize: 20,
    }
});
