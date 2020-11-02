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
        case "DELETE":
            return {
                ...state,
                tampung: state.tampung.filter((item, index) => index !== action.payload),
            }
        default:
            return state
    }
}

export default fetchData