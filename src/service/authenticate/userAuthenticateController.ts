import { Request, Response } from "express";
import { UserAuthenticate } from "./userAuthenticate";

export class UserAuthenticateController{
    async handle(request: Request, response: Response){
        
        const {email, password} = request.body;
        const userAuthenticate = new UserAuthenticate();

        const token = await userAuthenticate.execute({
            email,
            password,
        })

        return response.status(200).json(token)
    }
}