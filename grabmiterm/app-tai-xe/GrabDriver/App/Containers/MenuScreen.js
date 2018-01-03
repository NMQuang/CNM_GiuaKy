import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MenuScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text>This is Menu</Text>
            </View>
        );
    }
}