/**
 * @author Leon Mwandiringa
 * @uses define and run cors middleware
 * @return Router and Nextfunction object if emmited
 */

import { Middleware } from "./Middleware";
import { Request, Response, NextFunction } from "express";

 class CorsSecurity extends Middleware{

    //run Cors middleware
    public CORS(req: Request, res: Response, next: NextFunction){

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, X-HTTP-METHOD");
        res.header("Access-Control-Allow-Methods", "GET, POST, HEAD");                                

        next();

    }


 }

 export default new CorsSecurity();