const defaultState = false;

const signInReducer = (state = defaultState, action) => {
    if (action.type === 'START_SIGNIN') {
        return true;
    }
    if (action.type === 'END_SIGNIN') {
        return false;
    }
    return state;
};

export default signInReducer;
