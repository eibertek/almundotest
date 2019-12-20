import { actionCreator } from "./@types"

const CLASS_NAME = 'HOTELS';

export const HOTELS_LOAD = actionCreator(CLASS_NAME, 'load hotels');
export const HOTEL_LOAD = actionCreator(CLASS_NAME, 'load hotel');


