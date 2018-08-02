/**
 * @author Leon Mwandiringa
 * @uses run node server instance
 * @return mixed exec 
 */
import * as http from "http";
import * as debug from "debug";
import * as path from "path";
import App from "./Bootstrap/App";
import * as dotenv from "dotenv";
import Core from "./App/Controllers/CoreController"

//set debug for express server
debug("ts-express:server");

//initiate dotenv
dotenv.config();

let Port = Core.normalize(process.env.PORT || 3000); 

App.set("port", Port);

let Server = http.createServer(App);

Server.listen(Port);
Server.on("listening", ()=>{
        let addr = Server.address();
        let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        debug(`Listening on ${bind}`);
        console.log("running");
});
Server.on("error", Core.onError);