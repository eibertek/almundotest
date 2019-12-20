// lib/app.ts
import * as bodyParser from 'body-parser'
import App from './app'
import loggerMiddleware from './middleware/logger'
import HotelsController from './controllers/hotels'

const app = new App({
    port: 5000,
    controllers: [
        new HotelsController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen();