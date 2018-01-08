import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles/CustomerNotificationScreenStyle';
import NavigatorService from '../navigations/NavigatorService';

class CustomerNotificationScreen extends Component {
    acceptPoint() {
        NavigatorService.reset('ProcessCustomerScreen');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.costContainer}>
                    <Text style={styles.cost1}>80.000 VND</Text>
                    {
                        this.props.user.pointData.point.type === 'normal' ?
                            (
                                <Text style={styles.vehicleType}>Xe máy thông thường</Text>
                            ) :
                            (
                                <Text style={styles.vehicleType}>Xe máy xịn</Text>
                            )
                    }
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.topInfo}>
                        <View />
                        <Text style={styles.infoText}>1.2 km</Text>
                        <Text style={styles.infoText}>Tiền mặt</Text>
                        <View />
                    </View>
                    <View style={styles.from}>
                        <Text style={styles.infoText}>
                            {this.props.user.pointData.point.startPlace}
                        </Text>
                    </View>
                    <View style={styles.to}>
                        <Text style={styles.infoText}>
                        {this.props.user.pointData.point.place}
                        </Text>
                    </View>
                    <View style={styles.footerInfo}>
                        <Text style={styles.footerText}>[80.000]</Text>
                    </View>
                    <View style={styles.iconChervDown}>
                        <Icon name='chevron-down' size={30} color='#fff' />
                    </View>
                </View>
                <TouchableOpacity onPress={this.acceptPoint} style={styles.acceptBtn}>
                    <Text style={styles.acceptText}>NHẬN CUỐC XE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(CustomerNotificationScreen);
