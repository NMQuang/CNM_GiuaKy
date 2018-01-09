import { combineReducers } from 'redux';
import driverLocationReducer from './driverLocationReducer';
import userReducer from './userReducer';
import signInReducer from './signInReducer';
import connectReducer from './connectReducer';
import mapReducer from './mapReducer';

const reducer = combineReducers({
    location: driverLocationReducer,
    user: userReducer,
    isSigning: signInReducer,
    isConnect: connectReducer,
    mapInfo: mapReducer
});

export default reducer;
