import { combineReducers } from "redux";
import characterListReducer from "./characterListReducer";
import characterReducer from "./characterReducer";


export default combineReducers({
    charactersList: characterListReducer,
    character: characterReducer
})

