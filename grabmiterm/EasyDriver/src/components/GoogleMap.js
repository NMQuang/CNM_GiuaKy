import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import styles from './styles/GoogleMapStyle';
import { initLocationDriverAsync } from '../redux/actionCreator';

class GoogleMap extends Component {
    componentWillMount() {
        this.props.initLocationDriverAsync();
    }
    render() {
        console.log(this.props);
        return (
            <View style={[styles.container, this.props.styles]}>
                <MapView
                    showsUserLocation
                    style={styles.map}
                    region={{
                        latitude: this.props.location.latitude,
                        longitude: this.props.location.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                >
                </MapView>
            </View>
        );
    }
}

const mapStateToProps = (state) => (state.location);

export default connect(mapStateToProps, { initLocationDriverAsync })(GoogleMap);
