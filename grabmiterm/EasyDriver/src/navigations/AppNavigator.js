import { StackNavigator } from 'react-navigation';
import HomeDrawerNavigator from './HomeDrawerNavigator';
import LaunchScreen from '../containers/LaunchScreen';
import CustomerNotificationScreen from '../containers/CustomerNotificationScreen';
import ProcessCustomerScreen from '../containers/ProcessCustomerScreen';

const AppNavigator = StackNavigator({
    LaunchScreen: { screen: LaunchScreen },
    DrawerNavigator: { screen: HomeDrawerNavigator },
    CustomerNotificationScreen: { screen: CustomerNotificationScreen },
    ProcessCustomerScreen: { screen: ProcessCustomerScreen }
}, {
    initialRouteName: 'LaunchScreen',
    headerMode: 'none'
});

export default AppNavigator;
