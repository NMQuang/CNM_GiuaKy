import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import DrawerButton from './DrawerButton';
import styles from './Styles/HeaderStyle';
import images from '../Themes/Images';
export default class Header extends Component {
    openMenu() {
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }
    render() {
        return (
            <View style={styles.container}>
                <DrawerButton onPress={this.openMenu.bind(this)} />
                <Text style={styles.text}>Easy Driver</Text>
                <View />
            </View>
        );
    }
}