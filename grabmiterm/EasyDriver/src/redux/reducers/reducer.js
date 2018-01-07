import { combineReducers } from 'redux';
import driverLocationReducer from './driverLocationReducer';
import userReducer from './userReducer';
import signInReducer from './signInReducer';
import connectReducer from './connectReducer';

const reducer = combineReducers({
    location: driverLocationReducer,
    user: userReducer,
    isSigning: signInReducer,
    isConnect: connectReducer
});

export default reducer;
