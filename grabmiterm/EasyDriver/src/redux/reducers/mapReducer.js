const defaultState = {
    marker: null,
    coords: []
};

const mapReducer = (state = defaultState, action) => {
    if (action.type === 'UPDATE_MAP') {
        return action.mapInfo;
    }
    return state;
};
export default mapReducer;
