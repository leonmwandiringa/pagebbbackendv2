/**
 * @author Leon Mwandiringa
 * @uses define global base routes
 * @return server app object
 */

import { Router, Request, Response, NextFunction } from "express";
import HomeController from "../App/Controllers/HomeController";
import BuilderCrudController from "../App/Controllers/BuilderCrudController";

class GlobalRoutes{

    public router: Router;

    constructor(){
        this.router = Router();
        this.initiateRoutes();
    }


    private initiateRoutes(): void{

        this.router.post("/website", BuilderCrudController.creations('website'));
        this.router.get("/website", BuilderCrudController.retrivals('website'));
        this.router.delete("/website/:id", BuilderCrudController.deletions('website'));
        

        //seperate unexposed init
        this.router.post("/insert", new BuilderCrudController().insertCode);
        this.router.get("/components/:framework", new BuilderCrudController().getAllComponents);
    }

}


export default new GlobalRoutes().router;