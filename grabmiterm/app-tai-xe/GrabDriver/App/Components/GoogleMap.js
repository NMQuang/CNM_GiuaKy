import React, { Component } from 'react'
import styles from './Styles/GoogleMapStyle'
import images from '../Themes/Images'

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }
    onRegionChange(region) {
        this.setState({ region });
    }
    render() {
        return (
            null
        );
    }
}