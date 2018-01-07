import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles/MenuScreenStyle';
import { signInAsync, signOut } from '../redux/actionCreator';

class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    signIn() {
        this.props.signInAsync(this.state.username, this.state.password);
    }
    signOut() {
        this.props.signOut();
    }
    render() {
        return (
            <View style={styles.container}>
            {
                this.props.isSigning ?
                    <View style={{ alignItems: 'center' }}>
                        <Icon name='spinner-3' size={70} color='#fff' />
                    </View> :
                    this.props.user.token ?
                    (
                        <View>
                            <View style={{ alignItems: 'center', marginBottom: 50 }}>
                                <Text style={styles.userText}>{this.props.user.userName}</Text>
                            </View>
                            <TouchableOpacity style={styles.btnSignInOut} onPress={this.signOut.bind(this)}>
                                <Text style={styles.btnSignInOutText}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>
                    ) :
                    (
                        <View>
                            <TextInput 
                                style={styles.input} 
                                onChangeText={(text) => this.setState({ username: text })}
                                placeholder='Enter username'
                                placeholderTextColor='#4F4F4F'
                                underlineColorAndroid='#fff'
                            />
                            <TextInput 
                                style={styles.input} 
                                onChangeText={(text) => this.setState({ password: text })}
                                placeholder='Enter password'
                                placeholderTextColor='#4F4F4F'
                                underlineColorAndroid='#fff'
                            />
                            <TouchableOpacity style={styles.btnSignInOut} onPress={this.signIn.bind(this)}>
                                <Text style={styles.btnSignInOutText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    )
            }
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
        user: state.user,
        isSigning: state.isSigning
    });
export default connect(mapStateToProps, { signInAsync, signOut })(MenuScreen);
