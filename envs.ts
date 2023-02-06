import dotenv from "dotenv";
export function loadEnvs(){
    let path = ".env";
    if (process.env.DOTE_ENV === "test"){
        path = "env.test";
    }
    dotenv.config({path})
}

loadEnvs();