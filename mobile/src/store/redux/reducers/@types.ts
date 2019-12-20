import { Moment } from "moment";
import { CredType } from "../actions/@types";

export interface IAction {
    type: string,
    payload: {
        hotels?:Array<any>,
        hotel?:any,
    },
}

export interface IHotel {
    name: string,
    stars: number,
}

export interface IHotelsState {
    collection?: Array<IHotel>,
    currentHotelItem?:IHotel,
}

export interface IStore {
    hotels?: IHotelsState,
}

