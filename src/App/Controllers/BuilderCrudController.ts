/**
 * @author Leon Mwandiringa
 * @uses define Builder Main handler
 * @return Builder controller object
 * @format Factory pattern initiation
 */


import { Request, Response } from "express";
import Page from "../Models/Page";
import ValidationInterface from "../Interfaces/ValidationsInterface";
import WebsiteController from "./WebsiteController";

class BulderController{

   constructor(){

   }

   /*handles initation of factory to run*/
   public static creations(creationType: string): any{

        if(creationType == 'website'){
            return new WebsiteController().create;
        }else{
            return new WebsiteController;
        }
   }

   /*handles all get methods of all content*/
   public static retrivals(retrivalType: string): any{

        if(retrivalType == 'website'){
            return new WebsiteController().getAll;
        }else{
            return new WebsiteController;
        }

   }

   /**handles all page or website deletions */
   public static deletions(deletionType: string): any{

        if(deletionType == 'website'){
            return new WebsiteController().delete;
        }else{
            return new WebsiteController;
        }

   }



}

export default BulderController;