import { combineReducers } from "redux"
import AuthReducer from "./auth"
import fetchData from "./data"

const allReducers = combineReducers({
    auth: AuthReducer,
    data : fetchData
})

export default allReducers