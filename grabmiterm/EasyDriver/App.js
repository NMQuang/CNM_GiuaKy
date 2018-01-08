import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './src/containers/RootContainer';
import store from './src/redux/store';
import Driver from './src/lib/dbProcess';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        );
    }
}

