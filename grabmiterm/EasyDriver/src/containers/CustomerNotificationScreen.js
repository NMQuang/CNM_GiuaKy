import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles/CustomerNotificationScreenStyle';

export default class CustomerNotificationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.costContainer}>
                    <Text style={styles.cost1}>80.000 VND</Text>
                    <Text style={styles.vehicleType}>Xe máy thông thường</Text>
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
                            38/14 Lam Sơn, Phường 2, Quận Tân Bình, Hồ Chí Minh
                        </Text>
                    </View>
                    <View style={styles.to}>
                        <Text style={styles.infoText}>
                            234 Nguyễn Văn Cừ, Phường 3, Quận 5, Hồ Chí Minh
                        </Text>
                    </View>
                    <View style={styles.footerInfo}>
                        <Text style={styles.footerText}>[80.000]</Text>
                    </View>
                    <View style={styles.iconChervDown}>
                        <Icon name='chevron-down' size={30} color='#fff' />
                    </View>
                </View>
                <TouchableOpacity style={styles.acceptBtn}>
                    <Text style={styles.acceptText}>NHẬN CUỐC XE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
