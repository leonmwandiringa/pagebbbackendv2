/**
 * @author Leon Mwandiringa
 * @uses define Builder Main handler
 * @return Builder controller object
 */

import { Request, Response } from "express";
import Page from "../Models/Page";
import ValidationInterface from "../Interfaces/Validations";
import Website from "../Models/Website";

class WebsiteController{

   private static globalResponse: ValidationInterface;
   constructor(){
        
   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /*addition of websites */
   public addWebsite(req: Request, res: Response): Response{

        let { title, framework, author = 'admin', status} = req.body ;
        req.checkBody("title", "Website Title is not supposed to be empty").notEmpty();
       
        req.checkBody("framework", "Website Framework is not supposed to be empty is not supposed to be empty").notEmpty();

        let ErrorValidations = req.validationErrors();

        if(ErrorValidations){

            WebsiteController.globalResponse = {
                status: false,
                message: ErrorValidations,
                notice: "warning",
                resp: null
            }

            return res.status(200).json(WebsiteController.globalResponse);

        }

        
        let sanitized: any = WebsiteController.saniTizerbaby(title, framework, author, status);

        Website.find({title: sanitized.title}, (err: any, website: any)=>{

            if(err){
                console.log(err);
            }

            if(website == null || website.length == 0){

                return WebsiteController.saveSite(res, sanitized);

            }else{

                WebsiteController.globalResponse = {

                    status: true,
                    message: "Website was not created because it already exists",
                    notice: "warning",
                    resp: null
                }
    
                return res.status(200).json(WebsiteController.globalResponse);

            }

        });
        
   }

   /*sanitized passed values*/
   public static saniTizerbaby(title: string, framework: string, author: string, status: string ): any{

        let sanitzed = {
            title: title.trim(),
            framework: framework.trim(),
            author: author.trim(),
            status: status.trim()
        };

        return sanitzed;
   }

   /*saved from the passed data and stuff*/
   public static saveSite(res: Response, sanitized: any){

        let saveWebsite = new Website(sanitized);

        return saveWebsite.save((err: any, site:any)=>{
        
            if(err){
                console.log(err)
                throw new Error(`an error occured ${err}`);
            }

            let response: ValidationInterface = {

                status: true,
                message: "Website has successfully been created",
                notice: "Success",
                resp: site
            }

            return res.status(200).json(response);
        });

   }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* handles getting of all saved pages*/
   public getAllWebsites(req: Request, res: Response): any{

        Website.find({}, (err: any, websites: any)=>{

            if(err){
                console.log(err)
            }

            if(websites.length != 0 || websites != null){

                WebsiteController.globalResponse = {

                    status: true,
                    message: "Website were retrieved yo!",
                    notice: "Success",
                    resp: websites
                }
    
                
            }else{

                WebsiteController.globalResponse = {

                    status: false,
                    message: "Website were not retrieved yo!",
                    notice: "Warning",
                    resp: null
                }
            }

            return res.status(200).json(WebsiteController.globalResponse);

        });

   }


   /**run a webste delete op */

   public deleteWebsite(req:Request, res:Response): any{

        let { id } = req.params;

        req.checkParams("id", "ID is not supposed to be empty").notEmpty();

        let ErrorValidations = req.validationErrors();
        if(ErrorValidations){

            WebsiteController.globalResponse = {
                status: false,
                message: ErrorValidations,
                notice: "warning",
                resp: null
            }

            return res.status(200).json(WebsiteController.globalResponse);

        }

        Website.findOneAndRemove({_id: id}, (err: any, deleted: any)=>{

            if(err){
                console.log(err);
            }

            WebsiteController.globalResponse = {
                status: true,
                message: "Website was successfully deleted",
                notice: "success",
                resp: deleted
            }

            return res.status(200).json(WebsiteController.globalResponse);

        })


   }
}

export default WebsiteController;