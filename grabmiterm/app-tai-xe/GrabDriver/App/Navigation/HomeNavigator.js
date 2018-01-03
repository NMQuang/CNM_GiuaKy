import { DrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import HomeScreen from '../Containers/HomeScreen';
import MenuScreen from '../Containers/MenuScreen';

const DrawerNav = DrawerNavigator({
    HomeScreen: { screen: HomeScreen }
}, {
    initialRouteName: 'HomeScreen',
    contentComponent: props => <MenuScreen {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

export default DrawerNav;