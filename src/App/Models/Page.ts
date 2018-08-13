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
    websiteId:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false,
        default: null
    },
    priority:{
        type: String,
        required: false,
        enum: ['landing', 'support'],
        default: 'support'
    },
    code:{
        type: String,
        required: false,
        default: null
    },
    logs:{
        type: Array,
        default: []
    }


 },{
     timestamps: true
 });

 const Page = model('Page', PagesModel);
 export default Page;
