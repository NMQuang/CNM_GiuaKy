const defaultState = {
    location: {
        latitude: 10.12,
        longitude: 107.12
    }
};

const driverLocationReducer = (state = defaultState, action) => {
    if (action.type === 'UPDATE_LOCATION') {
        return action.location;
    }
    if (action.type === 'INIT_LOCATION') {
        return action.location;
    }
    return state;
};

export default driverLocationReducer;
