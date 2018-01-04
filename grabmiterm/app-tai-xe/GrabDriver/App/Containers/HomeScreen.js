import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles/HomeScreenStyle';
import Header from '../Components/Header';
import GoogleMap from '../Components/GoogleMap';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation}/>
                <GoogleMap />
            </View>
        );
    }
}