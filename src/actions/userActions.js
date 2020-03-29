import React from "react";

export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const FINISH_FETCHING_USER_DETAILS = "FINISH_FETCHING_USER_DETAILS";
export const SET_USER_ERROR = "SET_USER_ERROR";

const createAction = (type, data) => ({ type, data });

export const startFetchingUserDetails = () => createAction(FETCH_USER_DETAILS);

export const finishFetchingUserDetails = (user) => createAction(FINISH_FETCHING_USER_DETAILS, user);

export const setUserError = (error) => createAction(SET_USER_ERROR, error);