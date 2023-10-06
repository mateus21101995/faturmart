import { compare } from "bcryptjs";
import { prisma } from "../../prisma/prisma"
import {sign} from "jsonwebtoken"

interface UserRequest {
    email: string
    password: string
}

export class UserAuthenticate{
    async execute({email, password}:UserRequest){
        //Verificar se o email existe...
        const emailExists = await prisma.user.findFirst({
            where:{
                email,
            }
        });

        if(!emailExists){
            throw new Error("Email ou a senha errada!")
        }

        // Verificar se a senha está correcta
        const passwordCompare = await compare(password, emailExists.password)

        if(!passwordCompare){
            throw new Error("Email ou a senha errada!")
        }

        // Gerar token do usuario
        const token = sign({}, "64348efc-bbc2-43ee-91bd-54919047226c", {
            subject: emailExists.id,
            expiresIn: "60s",
            
        })

        return {token}
    }
}