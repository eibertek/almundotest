import { Schema } from "mongoose";

export declare interface IHotelInterface {
    hotelId?: String,
    name: String,
    images?: Array<String>,
    stars:Number,
    price: Number,
    ammenities?: Array<string>,
    description: String,
    breakfast?: Boolean,
    breakfastDescription?: String,
};

export const hotelSchema = {
    hotelId: String,
    name: String,
    images: [String],
    stars:Number,
    price: Number,
    ammenities: Object,
    description: String,
    breakfast: Boolean,
    breakfastDescription: String,
};


export default new Schema(hotelSchema);