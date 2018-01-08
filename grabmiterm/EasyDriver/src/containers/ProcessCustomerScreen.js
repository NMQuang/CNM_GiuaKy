import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/ProcessCustomerScreenStyle';
import GoogleMap from '../components/GoogleMap';

class ProcessCustomerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPicked: false
        };
    }
    pickedPoint() {
        this.setState({
            isPicked: true
        });
    }
    returnPoint() {
        
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
                                this.props.pointData.place : this.props.pointData.startPlace}
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
                        onPress={!this.state.isPicked ? this.pickedPoint : this.returnPoint} 
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
        pointData: state.user.pointData
    });
export default connect(mapStateToProps)(ProcessCustomerScreen);
