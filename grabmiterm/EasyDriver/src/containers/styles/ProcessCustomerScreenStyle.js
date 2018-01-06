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
    header: {
        height: Metrics.screenHeight / 5,
        justifyContent: 'space-around'
    },
    topHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topHeaderMainText: {
        ...Fonts.style.h4,
        color: Colors.snow
    },
    midHeaderText: {
        ...Fonts.style.h6,
        color: Colors.snow
    },
    bottomHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fee: {
        ...Fonts.style.h6,
        color: '#B7BAC3',
        marginRight: 10
    },
    btnFeeType: {
        backgroundColor: '#767A83',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    btnFeeTypeText: {
        color: '#a1b8dd',
        fontSize: 15
    },
    footer: {
        height: Metrics.screenHeight / 4,
        justifyContent: 'space-between'
    },
    footerBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    roundButton: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: '#555356',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickCustomerBtn: {
        flex: 1,
        backgroundColor: Colors.primary,
        marginTop: 20,
        borderRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CustomerBtnText: {
        color: Colors.snow,
        ...Fonts.style.h3
    },
    map: {
        top: (Metrics.screenHeight / 5) + 15,
        height: 
            Metrics.screenHeight - ((Metrics.screenHeight / 5) + 60) - (Metrics.screenHeight / 4),
        width: Metrics.screenWidth
    }
});
