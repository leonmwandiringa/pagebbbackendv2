/**
 * @author Leon Mwandiringa
 * @uses define Errors and traffic logger
 * @return void: writing to stream
 */

 import * as fs from "fs";
 import * as path from "path";
 import * as logger from "morgan";

 class LogsLogger{

    public static writeStream(): any{

        let writestream = fs.createWriteStream(path.join(__dirname, "../../../Logs/Logs.log"), {flags: 'a'});

        return logger('combined', {stream: writestream});

    }


 }

 export default LogsLogger;