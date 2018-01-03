import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerButtonStyles'
import images from '../Themes/Images';
// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

class DrawerButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={images.hamburger} style={styles.image} />
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
