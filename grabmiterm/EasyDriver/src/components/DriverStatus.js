import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
    Text, View
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/DriverStatusStyle';

class DriverStatus extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.elevationContainer}>
                    <View style={styles.statusBlock}>
                        <Icon name='check' size={50} color='#fff' />
                        <Text style={styles.number}>50%</Text>
                        <Text style={styles.text}>Tỷ lệ chấp nhận</Text>
                    </View>
                    <View style={styles.statusBlock}>
                        <Icon name='heart' size={50} color='#fff' />
                        <Text style={styles.number}>4/5</Text>
                        <Text style={styles.text}>Đánh giá</Text>
                    </View>
                    <View style={styles.statusBlock}>
                        <Icon name='close-o' size={50} color='#fff' />
                        <Text style={styles.number}>50%</Text>
                        <Text style={styles.text}>Tỷ lệ hủy</Text>
                    </View>
                </View>
                <View style={styles.connectContainer}>
                {
                    this.props.isConnect ? 
                    <Text>
                        Đã kết nối
                    </Text>
                    :
                    <Text>
                        Mất kết nối
                    </Text>
                }
                    
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
        isConnect: state.isConnect
    });
export default connect(mapStateToProps)(DriverStatus);
