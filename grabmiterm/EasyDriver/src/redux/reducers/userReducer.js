const defaultState = {
    token: null,
    userKey: null,
    userName: null,
    pointData: null
};

const userReducer = (state = defaultState, action) => {
    if (action.type === 'SIGN_IN') {
        return action.user;
    }
    if (action.type === 'SIGN_OUT') {
        return defaultState;
    }
    if (action.type === 'GET_POINTDATA') {
        return { ...state, pointData: action.pointData };
    }
    return state;
};

export default userReducer;
