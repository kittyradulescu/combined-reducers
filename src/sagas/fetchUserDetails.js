import {call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {setError} from "../actions/eventActions";
import {FETCH_USER_DETAILS, finishFetchingUserDetails} from "../actions/userActions";

export function* fetchUserDetailsEffect() {
    try {
        const response = yield call(fetchUser);
        yield put(finishFetchingUserDetails(response.data));
    } catch (e) {
        console.error("Could not load events", e);
        yield put(setError(e));
    }
}

export default function* fetchUserDetails() {
    yield takeLatest(FETCH_USER_DETAILS, fetchUserDetailsEffect);

}

export function fetchUser() {
    return axios.get('http://localhost:8080/futureEvents');
}