/**
 * @author Leon Mwandiringa
 * @uses define Main CodeSnippet model
 * @return Mongo db CodeSnippet Model object
 */

import { Schema, model } from "mongoose";

const CodeSnippetModel = new Schema({

   title:{
       type: String,
       required: true,
   },
   category: {
       type: String,
       required: true
   },
   code:{
        type: String,
        required: true,
    }

},{
    timestamps: true
});

const CodeSnippet = model('CodeSnippet', CodeSnippetModel);
export default CodeSnippet;
