/**
 * @author Leon Mwandiringa
 * @uses define and run base server instance security
 * @return Router and Nextfunction object if emmited
 */

import { Middleware } from "./Middleware";
import { Request, Response, NextFunction } from "express";

 class BaseSecurity extends Middleware{

    //define basic base security
    public CORE(req: Request, res: Response, next: NextFunction){

        res.header("X-Powered-By", "leontinashe");
        res.header("X-Frame-Options", "ALLOW-FROM https://www.xbox.com");
        res.header("X-Download-Options", "noopen");
            
        next();

    }

    //define basic XSS protection
    public XSS(req: Request, res: Response, next: NextFunction){

        res.header("X-Content-Type-Option", "nosniff");
        res.header("X-XSS-Protection", "1; mode=block");
        res.header("Referrer-Policy", "same-origin");

        next();

    }

    //define basic CSP security
    public CSP(req: Request, res: Response, next: NextFunction){

        res.header("Content-Security-Policy", "default src");

        next();

    }


 }

 export default new BaseSecurity();