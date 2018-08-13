/**
 * @author Leon Mwandiringa
 * @uses define Main Website model
 * @return Mongo db Website Model object
 */

import { Schema, model } from "mongoose";

const WebsiteSchema = new Schema({

   title:{
       type: String,
       required: true,
   },
   theme:{
       type: String,
       required: false,
       enum: ['Bootstrap', 'Modern'],
       default: 'Bootstrap'
   },
   navigation:{
       type: Array,
       default: []
   },
   navigationType:{
        type: String,
        required: false,
        enum: ['centerv1', 'leftv1', 'rightv1'],
        default: 'rightv1'
   },
   logo:{
        type: String,
        required: false,
        default: null
   },
   author: {
       type: String,
       default: 'admin',
       required: false
   },
   status: {
        type: String,
        default: 'PREVIEW',
        enum: ['PREVIEW', 'LIVE'],
        required: false
   },
   pages:{
       type: Array,
       default: []
   }

},{
    timestamps: true
});

const Website = model('Website', WebsiteSchema);
export default Website;
