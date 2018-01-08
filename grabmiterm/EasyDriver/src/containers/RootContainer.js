import React, { Component } from 'react';
import AppNavigator from '../navigations/AppNavigator';
import NavigatorService from '../navigations/NavigatorService';

export default class RootContainer extends Component {
    render() {
        return (
            <AppNavigator
                ref={navigatorRef => {
                    NavigatorService.setContainer(navigatorRef);
                }}
            />
        );
    }
}
