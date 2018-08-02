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
    framework:{
        type: String,
        required: true,
        enum: ['Bootstrap 4', 'Bootstrap 3', 'MWF', 'Materialize', 'Foundation']
    }

 },{
     timestamps: true
 });

 const Page = model('Page', PagesModel);
 export default Page;
