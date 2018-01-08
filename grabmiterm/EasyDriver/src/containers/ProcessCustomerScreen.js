import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/ProcessCustomerScreenStyle';
import GoogleMap from '../components/GoogleMap';
import Driver from '../lib/dbProcess';
import NavigatorService from '../navigations/NavigatorService';

class ProcessCustomerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPicked: false
        };
    }
    pickedPoint() {
        Driver.sendPickedSignal(this.props.pointData.pointKey);
        this.setState({
            isPicked: true
        });
    }
    returnPoint() {
        Driver.returnPoint(this.props.pointData.pointKey, this.props.driverKey);
        NavigatorService.reset('DrawerNavigator');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.topHeader}>
                        <Text style={styles.topHeaderMainText}>
                            {!this.state.isPicked ? 'ĐÓN KHÁCH' : 'TRẢ KHÁCH'}
                        </Text>
                    </View>
                    <View style={styles.midHeader}>
                        <Text style={styles.midHeaderText}>
                            {!this.state.isPicked ? 
                                this.props.pointData.endPlace : this.props.pointData.place}
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
                    <TouchableOpacity 
                        onPress={!this.state.isPicked ? this.pickedPoint.bind(this) : this.returnPoint.bind(this)} 
                        style={styles.pickCustomerBtn}
                    >
                        <Text style={styles.CustomerBtnText}>
                            {!this.state.isPicked ? 'ĐÓN KHÁCH' : 'TRẢ KHÁCH'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
        pointData: state.user.pointData,
        driverKey: state.user.userKey
    });
export default connect(mapStateToProps)(ProcessCustomerScreen);
