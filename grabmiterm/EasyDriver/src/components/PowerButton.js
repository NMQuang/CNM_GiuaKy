import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles/PowerButtonStyle';
import images from '../themes/Images';
// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

class PowerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPowerOn: false
        };
    }
    onPressButton() {
        this.setState({
            isPowerOn: !this.state.isPowerOn
        });
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPressButton.bind(this)}>
                <Image
                    source={this.state.isPowerOn ? images.powerOn : images.powerOff}
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    }
}

export default PowerButton;
