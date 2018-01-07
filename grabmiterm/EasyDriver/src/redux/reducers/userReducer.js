const defaultState = {
    token: null,
    userKey: null,
    userName: null
};

const userReducer = (state = defaultState, action) => {
    if (action.type === 'SIGN_IN') {
        return action.user;
    }
    if (action.type === 'SIGN_OUT') {
        return defaultState;
    }
    return state;
};

export default userReducer;
