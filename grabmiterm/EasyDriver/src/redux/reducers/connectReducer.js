const defaultState = false;

const connectReducer = (state = defaultState, action) => {
    if (action.type === 'TOGGLE_CONNECTION') {
        return !state;
    }
    return state;
};

export default connectReducer;
