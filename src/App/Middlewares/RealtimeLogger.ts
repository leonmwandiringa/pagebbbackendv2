/**
 * @author Leon Mwandiringa
 * @uses define REALTIME Errors and traffic logger
 * @return mixed: returning to console , void: writing to stream
 */

 import { Request, Response, NextFunction } from "express";

 class RealtimeLogger{

    public static LogRequest(req: Request, res: Response, next: NextFunction): void{
        console.log(req);
        console.log(res);
        next();
    }

 }

 export default RealtimeLogger;