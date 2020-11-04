const initialState = {
    isLoggedIn: false,
    dataLogin:{},
    userListFromApp:[]
}

const AuthReducer = (state = initialState, action) => {
    console.log("state: ", state);
    console.log("action: ", action);

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
            }
        case "LOGOUT":
            return initialState

        default:
            return state
    }
}

export default AuthReducer