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
        default:
            return state
    }
}

export default fetchData