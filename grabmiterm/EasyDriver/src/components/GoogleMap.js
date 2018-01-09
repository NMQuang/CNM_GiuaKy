import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import styles from './styles/GoogleMapStyle';
import { Colors } from '../themes/';
import { initLocationDriverAsync } from '../redux/actionCreator';

class GoogleMap extends Component {
    componentWillMount() {
        this.props.initLocationDriverAsync();
    }
    render() {
        return (
            <View style={[styles.container, this.props.styles]}>
                {
                    this.props.mapInfo.marker ?
                        (
                            <MapView
                                showsUserLocation
                                style={styles.map}
                                region={{
                                    latitude: this.props.location.location.latitude,
                                    longitude: this.props.location.location.longitude,
                                    latitudeDelta: 0.1,
                                    longitudeDelta: 0.1,
                                }}
                            >
                                <MapView.Marker
                                    coordinate={{
                                        latitude: this.props.mapInfo.marker.lat,
                                        longitude: this.props.mapInfo.marker.lng
                                    }}
                                />
                                <MapView.Polyline
                                    coordinates={this.props.mapInfo.coords}
                                    strokeWidth={5}
                                    strokeColor={Colors.primary}
                                />
                            </MapView>
                        ) : 
                        <MapView
                            showsUserLocation
                            style={styles.map}
                            region={{
                                latitude: this.props.location.location.latitude,
                                longitude: this.props.location.location.longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                            }} 
                        />
                }
            </View >
        );
    }
}

const mapStateToProps = (state) => ({
        location: state.location,
        mapInfo: state.mapInfo
    });

export default connect(mapStateToProps, { initLocationDriverAsync })(GoogleMap);
