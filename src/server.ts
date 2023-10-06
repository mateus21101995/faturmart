import "express-async-errors";
import Express, { NextFunction, Request, Response } from "express";
import cors from "cors"
import { route } from "./router/router";

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(route);
app.use((error: Error, req:Request, res:Response, next:NextFunction)=>{
    return res.json({
        status: "Error",
        message: error.message
    })
})

app.listen(5001, ()=>{
    console.log("Server running in port 5001")
});