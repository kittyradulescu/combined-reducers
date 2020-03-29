import {combineReducers} from "redux";
import {eventReducer as eventDetails} from "./eventReducer";
import {userReducer as userDetails} from "./userReducer";

export const rootReducer = combineReducers({
    eventDetails,
    userDetails,
});