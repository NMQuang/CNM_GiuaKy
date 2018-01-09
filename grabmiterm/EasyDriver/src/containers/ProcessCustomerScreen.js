import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/ProcessCustomerScreenStyle';
import GoogleMap from '../components/GoogleMap';
import Driver from '../lib/dbProcess';
import NavigatorService from '../navigations/NavigatorService';
import { updateMapInfo } from '../redux/actionCreator';
import DriverLocation from '../lib/locationProcess';

class ProcessCustomerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPicked: false
        };
    }
    componentWillMount() {
        const startLoc = {
            latitude: this.props.location.location.latitude,
            longitude: this.props.location.location.longitude
        };
        const desLoc = {
            latitude: this.props.pointData.point.location.lat,
            longitude: this.props.pointData.point.location.lng
        };
        DriverLocation.getDirections(startLoc, desLoc)
        .then((coords) => {
            const mapInfo = {
                marker: {
                    lat: this.props.pointData.point.location.lat,
                    lng: this.props.pointData.point.location.lng
                },
                coords
            };
            this.props.updateMapInfo(mapInfo);
        })
        .catch((error) => console.log(error));
    }
    pickedPoint() {
        Driver.sendPickedSignal(this.props.pointData.pointKey);
        this.setState({
            isPicked: true
        });
        const startLoc = {
            latitude: this.props.location.location.latitude,
            longitude: this.props.location.location.longitude
        };
        const desLoc = {
            latitude: this.props.pointData.point.endLocation.lat,
            longitude: this.props.pointData.point.endLocation.lng
        };
        DriverLocation.getDirections(startLoc, desLoc)
        .then((coords) => {
            const mapInfo = {
                marker: {
                    lat: this.props.pointData.point.endLocation.lat,
                    lng: this.props.pointData.point.endLocation.lng
                },
                coords
            };
            this.props.updateMapInfo(mapInfo);
        })
        .catch((error) => console.log(error));
    }
    returnPoint() {
        Driver.returnPoint(this.props.pointData.pointKey, this.props.driverKey);
        this.props.updateMapInfo({ marker: null, coords: [] });
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
                                this.props.pointData.point.place : this.props.pointData.point.endPlace}
                        </Text>
                    </View>
                    <View style={styles.bottomHeader}>
                        <Text style={styles.fee}>80.000 VND</Text>
                        <View style={styles.btnFeeType}>
                            <Text style={styles.btnFeeTypeText}>TIỀN MẶT</Text>
                        </View>
                    </View>
                </View>
                { 
                    this.state.isPicked ? 
                        <GoogleMap 
                            styles={styles.map} 
                        /> 
                        : <GoogleMap 
                            styles={styles.map} 
                        />
                }    
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
        driverKey: state.user.userKey,
        location: state.location
    });
export default connect(mapStateToProps, { updateMapInfo })(ProcessCustomerScreen);
