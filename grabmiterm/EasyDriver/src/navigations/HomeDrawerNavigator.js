import { DrawerNavigator } from 'react-navigation';
import React from 'react';
import HomeScreen from '../containers/HomeScreen';
import MenuScreen from '../containers/MenuScreen';

const HomeDrawerNavigator = DrawerNavigator({
    HomeScreen: { screen: HomeScreen }
}, {
    initialRouteName: 'HomeScreen',
    contentComponent: props => <MenuScreen {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

export default HomeDrawerNavigator;
