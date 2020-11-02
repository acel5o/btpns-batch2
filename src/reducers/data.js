const initialState = {
    isLoggedIn: false,
    tampung:[]
}

const fetchData = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH":
            return {
                tampung:action.payload.tampung
            }
        case "REGISTER":
            return {
                ...state,
                tampung: [...state.tampung, action.payload.dataRegister]
            }
        default:
            return state
    }
}

export default fetchData