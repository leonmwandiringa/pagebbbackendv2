/**
 * @author Leon Mwandiringa
 * @uses define Home route handler
 * @return home controller object
 */

 import { Request, Response, NextFunction } from "express";
 import * as cluster from "cluster";

 class HomeController{

    constructor(){

    }

    public home(req: Request, res: Response){
        //console.log(`your request was handled by process ${cluster.worker.process.pid}`);
        res.send("working");
        
    }

 }

 export default new HomeController();