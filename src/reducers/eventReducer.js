import React from "react";
import {FETCH_EVENTS, FINISH_FETCHING_EVENTS, SET_ERROR} from "../actions/eventActions";

export const initialState = {
    loadingState: null,
    events: [],
    error: null,
};

export const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_EVENTS:
            return {...state, loadingState: "LOADING"};
        case FINISH_FETCHING_EVENTS:
            return {...state, events: action.data, loadingState: "LOADED"};
        case SET_ERROR:
            return {...state, error: action.data, loadingState: "ERROR"};
    }
    return state;
};

export default eventReducer;
