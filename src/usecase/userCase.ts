import {hash} from "bcryptjs";
import { prisma } from "../prisma/prisma";

interface UserProps {
    id: string;
    avatar: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    storeId: string;
}

export class UserCase {
    async handle({id, avatar, name, phone, email, password, storeId}:UserProps){
        const passwordHash = await hash(password, 8)

        const create = await prisma.user.create({
            data:{
                id,
                avatar,
                name,
                phone,
                email,
                password: passwordHash,
                storeId,
            }
        });

        return create;
    }

    async handleSelect(){
        const userSelect = await prisma.user.findMany();
        return userSelect;
    }

    async handleSelectId({id, avatar, name, phone, email, password, storeId}:UserProps){
        const selectId = await prisma.user.findFirst({
            where:{
                id,
            }
        });

        return selectId
    }

    async handleUpdate({id, avatar, name, phone, email, password, storeId}:UserProps){
        const userUpdate = await prisma.user.update({
            where:{
                id,
            },
            data:{
                avatar,
                name,
                phone,
                email,
                password,
                storeId
            }
        });

        return userUpdate
    }


    async handleDelete({id, avatar, name, phone, email, password, storeId}:UserProps){
        const userDelete = await prisma.user.delete({
            where:{
                id,
            }
        });

        return userDelete
    }

    
}