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
   framework:{
       type: String,
       required: true,
       enum: ['Bootstrap4', 'Bootstrap3', 'MWF', 'Materialize', 'Foundation']
   },
   author: {
       type: String,
        default: 'admin'
   },
   status: {
        type: String,
        default: 'PREVIEW',
        enum: ['PREVIEW', 'LIVE']
   },
   pages:{
       type: Number,
       default: 0
   }

},{
    timestamps: true
});

const Website = model('Website', WebsiteSchema);
export default Website;
