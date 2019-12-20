//import { takeLatest } from "@redux-saga/core/effects";
import { IAction } from "../reducers/@types";
import { put, select, call } from '@redux-saga/core/effects';
import { dispatch } from '..';
import { NavigationActions } from 'react-navigation';
import { ROUTES } from '../../../views/Routes';
import { HOTELS_LOAD, HOTEL_LOAD } from "../actions/hotels";
import { NavigatorInstance } from "../actions/@types";

export function* getHotelsFromServer() {
    try{
        const request = yield call(fetch, 'http://192.168.0.6:5000/hotels');
        const payload = yield request.json();
        yield put({ type: HOTELS_LOAD.COMPLETED, payload});
    }catch(e){
        console.log(e);
    }
} 

export function* goToDetails(action: any) {
    try{
        NavigatorInstance.dispatch(NavigationActions.navigate({ routeName: ROUTES.HOTELDETAIL}));   
        yield put({ type: HOTEL_LOAD.COMPLETED, payload: {hotel: {}} });
        const { id } = action;
        const request = yield call(fetch, `http://192.168.0.6:5000/hotel/${id}`);
        const payload = yield request.json();
        if(!payload.error) {
            const hotel = payload.hotels[0];
            yield put({ type: HOTEL_LOAD.COMPLETED, payload: {hotel} });
            NavigatorInstance.dispatch(NavigationActions.navigate({ routeName: ROUTES.HOTELDETAIL}));    
        }
    }catch(e){
        NavigatorInstance.dispatch(NavigationActions.navigate({ routeName: ROUTES.HOTELLIST}));    
        console.log(e);
    }
} 