import React from "react";
import {FETCH_USER_DETAILS, FINISH_FETCHING_USER_DETAILS, SET_USER_ERROR} from "../actions/userActions";

export const initialState = {
    loadingState: null,
    user: null,
    error: null,
};

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USER_DETAILS:
            return {...state, loadingState: "LOADING"};
        case FINISH_FETCHING_USER_DETAILS:
            return {...state, user: action.data, loadingState: "LOADED"};
        case SET_USER_ERROR:
            return {...state, error: action.data, loadingState: "ERROR"};
    }
    return state;
};

export default userReducer;
