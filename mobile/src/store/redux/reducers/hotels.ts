import { IAction } from "./@types"
import { HOTELS_LOAD, HOTEL_LOAD } from "../actions/hotels"
import { actionCreator } from "../actions/@types"

const initialState = {
    collection: [],
    currentHotelItem: {}
}

export default (state = initialState, { type, payload }:IAction) => {
    switch (type) {
    case HOTELS_LOAD.COMPLETED:
        return { ...state, collection: payload.hotels }
    case HOTEL_LOAD.COMPLETED:
        return { ...state, currentHotelItem: payload.hotel }

    default:
        return state
    }
}
