import React, { Component } from 'react';
import { View } from 'react-native';
import GoogleMap from '../components/GoogleMap';

import styles from './styles/HomeScreenStyle';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <GoogleMap />
            </View>
        );
    }
}
