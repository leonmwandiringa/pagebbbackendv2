/**
 * @author Leon Mwandiringa
 * @uses define webpage Main handler
 * @return webpage controller object
 */

import { Request, Response } from "express";
import Page from "../Models/Page";
import ValidationInterface from "../Interfaces/ValidationsInterface";
import Website from "../Models/Website";
import AbstractCrudController from "../Interfaces/AbstractCrudController";

class WebPageController extends AbstractCrudController{

   private static globalResponse: ValidationInterface;
   constructor(){
        super();
   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /*addition of websites */
   public create(req: Request, res: Response): Response{

        let { title, websiteId, priority, description } = req.body ;
        req.checkBody("title", "Website Title is not supposed to be empty").notEmpty();

        let ErrorValidations = req.validationErrors();

        if(ErrorValidations){

            WebPageController.globalResponse = {
                status: false,
                message: ErrorValidations,
                notice: "warning",
                resp: null
            }

            return res.status(200).json(WebPageController.globalResponse);

        }

        
        let sanitized: any = WebPageController.saniTizerbaby(title, websiteId, priority, description);

        Website.find({_id: sanitized.websiteId}, (err: any, website: any)=>{

            if(err){
                console.log(err);
            }

            if(website == null || website.length == 0){

                WebPageController.globalResponse = {

                    status: true,
                    message: "Page was not created because website does not exist",
                    notice: "warning",
                    resp: null
                }
    
                return res.status(200).json(WebPageController.globalResponse);     

            }else{

                return WebPageController.save(res, sanitized);

            }

        });
        
   }

   /*sanitized passed values*/
   public static saniTizerbaby(title: string, websiteId: string, priority: string, description: string): object{

        let sanitzed = {
            title: title.trim(),
            websiteId: websiteId.trim(),
            priority: priority.trim(),
            description: description.trim(),
        };

        return sanitzed;
   }

   /*saved from the passed data and stuff*/
   public static save(res: Response, sanitized: any){

        let saveWebpage = new Page(sanitized);

        return saveWebpage.save((err: any, site:any)=>{
        
            if(err){
                console.log(err)
                throw new Error(`an error occured ${err}`);
            }

            WebPageController.globalResponse = {

                status: true,
                message: "Website has successfully been created",
                notice: "Success",
                resp: site
            }

            return res.status(200).json(WebPageController.globalResponse);
        });

   }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* handles getting of all saved pages*/
   public getAll(req: Request, res: Response): any{

        Website.find({}, (err: any, websites: any)=>{

            if(err){
                console.log(err)
            }

            if(websites.length != 0 || websites != null){

                WebPageController.globalResponse = {

                    status: true,
                    message: "Website were retrieved yo!",
                    notice: "Success",
                    resp: websites
                }
    
                
            }else{

                WebPageController.globalResponse = {

                    status: false,
                    message: "Website were not retrieved yo!",
                    notice: "Warning",
                    resp: null
                }
            }

            return res.status(200).json(WebPageController.globalResponse);

        });

   }


   /**run a webste delete op */

   public delete(req:Request, res:Response): any{

        let { id } = req.params;

        req.checkParams("id", "ID is not supposed to be empty").notEmpty();

        let ErrorValidations = req.validationErrors();
        if(ErrorValidations){

            WebPageController.globalResponse = {
                status: false,
                message: ErrorValidations,
                notice: "warning",
                resp: null
            }

            return res.status(200).json(WebPageController.globalResponse);

        }

        Website.findOneAndRemove({_id: id}, (err: any, deleted: any)=>{

            if(err){
                console.log(err);
            }

            WebPageController.globalResponse = {
                status: true,
                message: "Website was successfully deleted",
                notice: "success",
                resp: deleted
            }

            return res.status(200).json(WebPageController.globalResponse);

        })


   }
}

export default WebPageController;