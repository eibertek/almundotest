import * as express from 'express'
import { Request, Response } from 'express'
import * as mongoose from "mongoose";
import IControllerBase from './IController'
import HotelSchema from '../HotelModel';
import { HOST, PORT, DATABASE } from '../constants';

class HotelsController implements IControllerBase {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/hotels/', this.getHotels)
        this.router.get('/hotel/:id', this.getHotel)
    }

    getHotels = async (req: Request, res: Response) => {
        await mongoose.connect(`mongodb://${HOST}:${PORT}/${DATABASE}`, { useUnifiedTopology: true });
        const hotels = mongoose.model('hotels', HotelSchema);
        const results = {
            error:'',
            hotels:[],
        };
        await hotels.find({}, "name stars price images", (error: any, result: any) => { 
            if(error) results.error = error;
            results.hotels = result;
        }).slice('images', 1);
        res.send(JSON.stringify(results)); 
    }

    getHotel = async (req: Request, res: Response) => {
        await mongoose.connect(`mongodb://${HOST}:${PORT}/${DATABASE}`, { useUnifiedTopology: true });
        const hotels = mongoose.model('hotels', HotelSchema);
        const results = {
            error:'',
            hotels:[],
        };
        await hotels.find({_id: req.params.id}, (error: any, result: any) => { 
            if(error) results.error = error;
            results.hotels = result;
        });
        res.send(JSON.stringify(results)); 
    }    
}

export default HotelsController