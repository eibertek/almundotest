import * as mongoose from "mongoose";
import HotelSchema, { IHotelInterface } from './HotelModel';
import mockData from './mockData';

export const HOST = 'localhost';
export const PORT = '27017';
export const DATABASE = 'almundotest';
const images = ['01.jpg', 
'02.jpg', 
'5b5a070e_z.jpg', 
'08391a9e_z.jpg',
'41da3641_z.jpg',
'494df7f1_z.jpg',
'68f69183_z.jpg',
];
const ammenities =  ["bath", "pool", "newspaper", "solarium", "internet", "games", "lunch", "chemistry", "magic"];
export const hotels = mongoose.model('hotels', HotelSchema);
const hotelsData:Array<IHotelInterface> = mockData;
hotelsData.forEach( hotel => {
    const fill = array => {        
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    };
    hotel.ammenities = Array(5).fill("").map(() => fill(ammenities)); 
    hotel.images = Array(5).fill("").map(() => fill(images));
});

mongoose.connect(`mongodb://${HOST}:${PORT}/${DATABASE}`, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
    //clean the database
    hotels.deleteMany({}, (err:any)=>{
        err && console.log(err);
    });
    // create all the hotels
    hotels.insertMany(hotelsData, function (err:any, small:any) {
        if (!err) console.log('All done');
        else console.log(err);
       process.exit()
    });
})
