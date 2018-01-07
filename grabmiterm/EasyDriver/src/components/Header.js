import React, { Component } from 'react';
import {
    View
} from 'react-native';
import DrawerButton from './DrawerButton';
import styles from './styles/HeaderStyle';
import PowerButton from './PowerButton';

export default class Header extends Component {
    openMenu() {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }
    render() {
        return (
            <View style={styles.container}>
                <DrawerButton onPress={this.openMenu.bind(this)} />
                <PowerButton />
                <View />
            </View>
        );
    }
}
