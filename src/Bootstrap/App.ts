/**
 * @author Leon Mwandiringa
 * @uses bootsrap mvc app instance
 * @return server app object
 */

import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import router from "../Routes/web";
import LoggerStream from "../App/Controllers/LogsLogger";
import * as gzip from "compression";
import CorsSecurity from "../App/Middlewares/CorsSecurity";
import ServerSecurity from "../App/Middlewares/BaseSecurity";
import * as mongoose from "mongoose";
import Config from "./Config";
import GlobalValidation from "../App/Middlewares/ValidationMiddleware";
//import RealtimeMiddleware from "../App/Middlewares/RealtimeLogger";

class App{

    public express: express.Application;
    private connection: any

    constructor(){

        this.express = express();
        this.moduleMiddlewares();
        this.LocalMiddlewares();
        this.BaseConfig();
        this.routes();

    }

    private BaseConfig(): any{

        this.connection = mongoose.connect(Config.TEST_DB_CONNECTION);
        return this.connection;

    }

    /* run global modules middlewares */
    private moduleMiddlewares(): void{

        this.express.use(gzip());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));

    }

    /* define and run global local middlewares */
    private LocalMiddlewares(): void{

        
        //security middlewares
        this.express.use(ServerSecurity.CORE);
        this.express.use(ServerSecurity.XSS);
        this.express.use(ServerSecurity.CSP);
        this.express.use(CorsSecurity.CORS);

        this.express.use(GlobalValidation.Validation());
        //logger to file middlewares
        this.express.use(LoggerStream.writeStream());


    }

    /* call and run global router middlewares */
    private routes(){

        let route = express.Router();
        this.express.use(router);

    }

}

export default new App().express;