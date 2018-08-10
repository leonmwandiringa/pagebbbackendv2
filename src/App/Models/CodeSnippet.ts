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
   framework:{
       type: String,
       required: true,
       enum: ['Bootstrap4', 'Bootstrap3', 'MWF', 'Materialize', 'Foundation']
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
