import React, { Component } from 'react';
import { View } from 'react-native';

import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';
import DriverStatus from '../components/DriverStatus';
import styles from './styles/HomeScreenStyle';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} />
                <GoogleMap styles={styles.map} />
                <DriverStatus />
            </View>
        );
    }
}

