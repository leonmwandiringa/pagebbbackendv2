/**
 * @author Leon Mwandiringa
 * @uses define base Middleware
 * @return Router and Nextfunction object if emmited
 */

import { Router } from "express";

export class Middleware{

   protected router: Router;
   constructor(){

       this.router = Router();

   }

}
