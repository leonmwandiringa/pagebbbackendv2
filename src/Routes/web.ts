/**
 * @author Leon Mwandiringa
 * @uses define global base routes
 * @return server app object
 */

import { Router, Request, Response, NextFunction } from "express";
import HomeController from "../App/Controllers/HomeController";
import BuilderController from "../App/Controllers/BuilderController";

class GlobalRoutes{

    public router: Router;

    constructor(){
        this.router = Router();
        this.initiateRoutes();
    }


    private initiateRoutes(): void{
        this.router.post("/website", BuilderController.creations('website'));
        this.router.get("/website", BuilderController.retrivals('website'));
    }

}


export default new GlobalRoutes().router;