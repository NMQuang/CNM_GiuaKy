import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles/DrawerButtonStyles';
import images from '../themes/Images';
// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

class DrawerButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={images.hamburger} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

export default DrawerButton;
