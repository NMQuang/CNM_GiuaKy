import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/ProcessCustomerScreenStyle';
import GoogleMap from '../components/GoogleMap';

export default class ProcessCustomerScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.topHeader}>
                        <Text style={styles.topHeaderMainText}>ĐÓN KHÁCH</Text>
                    </View>
                    <View style={styles.midHeader}>
                        <Text style={styles.midHeaderText}>
                            38/14 Lam Sơn, Phường 2, Quận Tân Bình, Hồ Chí Minh
                        </Text>
                    </View>
                    <View style={styles.bottomHeader}>
                        <Text style={styles.fee}>80.000 VND</Text>
                        <View style={styles.btnFeeType}>
                            <Text style={styles.btnFeeTypeText}>TIỀN MẶT</Text>
                        </View>
                    </View>
                </View>
                <GoogleMap styles={styles.map} />
                <View style={styles.footer}>
                    <View style={styles.footerBtnContainer}>
                        <TouchableOpacity style={styles.roundButton}>
                            <Icon name='call' size={30} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundButton}>
                            <Icon name='message' size={30} color='#fff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundButton}>
                            <Icon name='close' size={30} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.pickCustomerBtn}>
                        <Text style={styles.CustomerBtnText}>ĐÓN KHÁCH</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
