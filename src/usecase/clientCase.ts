import { prisma } from "../prisma/prisma";

interface ClientPropos {
    id: string;
    avatar: string;
    name: string;
    phone: string;
    email: string;
    adress: string;
}

export class ClientCase {
    async handle({id, avatar, name, phone, email, adress}:ClientPropos){

        const nameExist = await prisma.clients.findFirst({
            where:{
                name,
            }
        });

        const emailExists = await prisma.clients.findFirst({
            where:{
                name,
            }
        });

        const phoneExists = await prisma.clients.findFirst({
            where:{
                name,
            }
        });

        if(nameExist){
            throw new Error("Este Nome já existe!")
        }

        if(phoneExists){
            throw new Error("Este Número já existe!")
        }

        if(emailExists){
            throw new Error("Este Email já existe!")
        }


        const createUser = await prisma.clients.create({
            data:{
                id,
                avatar,
                name,
                phone,
                email,
                adress,
            }
        });

        return createUser;
    }

    // Selecionar todos os clientes
    async handleSelect(){
        const select = await prisma.clients.findMany();
        return select;
    }

    // Selecionar um unico client
    async handleId({id, avatar, name, phone, email, adress}:ClientPropos){
        const selectId = await prisma.clients.findFirst({
            where:{
                id
            }
        });

        return selectId;
    }

    // Actualizar
    async handleupdate({id, avatar, name, phone, email, adress}:ClientPropos){
        const clienteUpdate = await prisma.clients.update({
            where:{
                id
            },
            data:{
                avatar,
                name,
                phone,
                email,
                adress,
            }
        });

        return clienteUpdate;
    }

    // Eliminar
    async handledelete({id, avatar, name, phone, email, adress}:ClientPropos){
        const clientDelete = await prisma.clients.delete({
            where:{
                id
            }
        });

        return clientDelete;
    }
}