import { IHotel } from "../store/redux/reducers/@types";

declare interface NavigationProps {
    navigation: {
        navigate: Function,
    }
}

export declare interface IHotelListItemProps {
    name: string, 
    price?: number,
    stars?: number,
    _id?:string,
    goToDetails?:(id: string) => void,
}

export declare interface IHotelListProps extends NavigationProps {
    hotels?: Array<IHotel>
}

