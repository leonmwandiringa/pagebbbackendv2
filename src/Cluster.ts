/**
 * @author Leon Mwandiringa
 * @uses run node server cluster processes
 * @return mixed exec to main server file
 */

 import * as CLUSTER from "cluster";
 import * as OS from "os";

 //define number of cpus for usage
 const CPUS: any = OS.cpus();
 //const CPUS: number = 2;
 
 if(CLUSTER.isMaster){

    CPUS.forEach(()=>{

        CLUSTER.fork();

    });

    CLUSTER.on("listening", (worker: any)=>{
        console.log(`${worker.process.pid} running `);
    });

    CLUSTER.on("disconnect", (worker: any)=>{
        console.log(`${worker.process.pid} disconnected `);
    });

    CLUSTER.on("exit", (worker: any)=>{
        console.log(`${worker.process.pid} exited `);
        CLUSTER.fork();
    });

 }else{

    require("./Server");
 }
