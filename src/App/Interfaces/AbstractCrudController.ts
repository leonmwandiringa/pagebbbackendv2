/**
 * @author Leon Mwandiringa
 * @uses define Builder Crud abstract class
 * @return Builder controller object
 */

 import { Request, Response, NextFunction } from "express";
 import ValidationInterface from "./ValidationsInterface";

 abstract class AbstructCrudController{

    //private static globalResponse: ValidationInterface;
    constructor(){
            
    }

    public abstract create(req: Request, res: Response): Response;

    public abstract delete(req: Request, res: Response): Response;

    //public abstract edit(req: Request, res: Response): Response;

    public abstract getAll(req: Request, res: Response): Response;

    //public abstract getone(req: Request, res: Response): Response;

 }

 export default AbstructCrudController;