import { combineReducers } from 'redux';
import driverLocationReducer from './DriverLocationReducer';

const reducer = combineReducers({
    location: driverLocationReducer
});

export default reducer;
