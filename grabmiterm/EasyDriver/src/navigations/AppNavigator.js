import { StackNavigator } from 'react-navigation';
import HomeDrawerNavigator from './HomeDrawerNavigator';
import LaunchScreen from '../containers/LaunchScreen';

const AppNavigator = StackNavigator({
    LaunchScreen: { screen: LaunchScreen },
    DrawerNavigator: { screen: HomeDrawerNavigator }
}, {
    initialRouteName: 'LaunchScreen',
    headerMode: 'none'
});

export default AppNavigator;
