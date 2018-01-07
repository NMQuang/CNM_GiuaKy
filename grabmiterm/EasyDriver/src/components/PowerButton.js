import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/PowerButtonStyle';
import images from '../themes/Images';
import Driver from '../lib/dbProcess';
import DriverLocation from '../lib/locationProcess';
import { toggleConnection } from '../redux/actionCreator';
// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

class PowerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPowerOn: false
        };
    }
    onPressButton() {
        if (this.props.driverKey) {
            let status = '';
            if (this.props.isConnect) {
                status = 'offline';
                DriverLocation.stopPingLocation();
            } else {
                status = 'online';
                DriverLocation.pingLocation(this.props.driverKey);
            }
            this.props.toggleConnection();
            Driver.updateConnectStatus(status, this.props.driverKey);
            this.setState({
                isPowerOn: !this.state.isPowerOn
            });
        } else {
            alert('Bạn chưa đăng nhập');
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPressButton.bind(this)}>
                <Image
                    source={this.state.isPowerOn ? images.powerOn : images.powerOff}
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    }
}


const mapStateToProps = (state) => ({
    driverKey: state.user.userKey,
    isConnect: state.isConnect
});

export default connect(mapStateToProps, { toggleConnection })(PowerButton);
