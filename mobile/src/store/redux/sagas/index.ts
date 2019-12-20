import { takeLatest, call} from "@redux-saga/core/effects";
import { HOTELS_LOAD, HOTEL_LOAD } from "../actions/hotels";
import { getHotelsFromServer, goToDetails } from "./hotelsSaga";

function* rootSaga() {
    yield takeLatest(HOTELS_LOAD.REQUESTED, getHotelsFromServer);
    yield takeLatest(HOTEL_LOAD.REQUESTED, goToDetails);
    yield call(getHotelsFromServer);
};

export default rootSaga;