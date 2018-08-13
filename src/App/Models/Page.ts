/**
 * @author Leon Mwandiringa
 * @uses define Main Page model
 * @return Mongo db Pages Model object
 */

 import { Schema, model } from "mongoose";

 const PagesModel = new Schema({

    title:{
        type: String,
        required: true,
    },
    website_id:{
        type: String,
        required: true
    }

 },{
     timestamps: true
 });

 const Page = model('Page', PagesModel);
 export default Page;
