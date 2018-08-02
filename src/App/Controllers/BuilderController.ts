/**
 * @author Leon Mwandiringa
 * @uses define Builder Main handler
 * @return Builder controller object
 * @format Factory pattern initiation
 */


import { Request, Response } from "express";
import Page from "../Models/Page";
import ValidationInterface from "../Interfaces/Validations";
import WebsiteController from "./WebsiteController";

class BulderController{

   constructor(){

   }

   /*handles initation of factory to run*/
   public static creations(creationType: string): any{

        if(creationType == 'website'){
            return new WebsiteController().addWebsite;
        }else{
            return new WebsiteController;
        }
   }

   /*handles all get methods of all content*/
   public static retrivals(retrivalType: string): any{

        if(retrivalType == 'website'){
            return new WebsiteController().getAllWebsites;
        }else{
            return new WebsiteController;
        }

   }



}

export default BulderController;