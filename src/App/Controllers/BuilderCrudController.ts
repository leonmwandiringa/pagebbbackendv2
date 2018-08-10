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
import CodeSnippet from "../Models/CodeSnippet";

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

   //seperate tobe instantiated route
   public insertCode(req: Request, res: Response): Response{

        let { title, framework, code } = req.body;
        let globalResponse: ValidationInterface;

        req.checkBody("title", "title is not supposed to be empty").notEmpty();
        req.checkBody("framework", "framework is not supposed to be empty").notEmpty();
        req.checkBody("code", "code is not supposed to be empty").notEmpty();

        let ErrorValidations = req.validationErrors();
        if(ErrorValidations){

            globalResponse = {
                status: false,
                message: ErrorValidations,
                notice: "warning",
                resp: null
            }

            return res.status(200).json(globalResponse);

        }

        let newSnippet = new CodeSnippet({
            title, framework, code
        });

        newSnippet.save((err: any, saved: any)=>{

            if(err){
                console.log(err);
            }

            globalResponse = {
                status: true,
                message: "Success code snippet was successfully saved ",
                notice: "success",
                resp: saved
            }

            return res.status(200).json(globalResponse);
        });

   }

   public getAllComponents(req: Request, res: Response): Response{
       
        let globalResponse: ValidationInterface;
        let { framework } = req.params;

        req.checkParams('framework', 'Framework is required').notEmpty();
        let ErrorValidations = req.validationErrors();

        if(ErrorValidations){

            globalResponse  = {
                status: false,
                message: ErrorValidations,
                notice: "warning",
                resp: null
            }

            return res.status(200).json(globalResponse);

        }

        CodeSnippet.find({framework: framework}, (err: any, components)=>{

            if(err){
                console.log(err);
            }
            
            globalResponse  = {
                status: false,
                message: "success components were found",
                notice: "success",
                resp: components
            }

            return res.status(200).json(globalResponse);

        });

   }



}

export default BulderController;