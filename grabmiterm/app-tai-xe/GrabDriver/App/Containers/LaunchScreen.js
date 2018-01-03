import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogo: false
    }
  }
  componentWillMount() {
    setTimeout(() => { this.setState({ showLogo: true }) }, 500)
  }
  goBackHomeScreen() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'DrawerNav'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
    const { goBack } = this.props.navigation;
    goBack();
  }
  render() {
    return (
      <View style={styles.mainContainer}>
      { this.state.showLogo ?
        (<ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Welcome to <Text style={styles.primaryText}>EasyDriver</Text>
            </Text>
          </View>
        </ScrollView>) : null
      }
      </View>
    )
  }
  componentDidMount() {
    setTimeout(this.goBackHomeScreen.bind(this), 2500);
  }
}
