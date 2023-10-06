import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";



export function VericarAutenticação(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json("token está processando!")
    }

    const[, token] = authToken.split(" ")

    try {
        verify(token, "64348efc-bbc2-43ee-91bd-54919047226c")
        return next();
    } catch (err) {
        return response.status(401).json("Token invalido!")
    }
}