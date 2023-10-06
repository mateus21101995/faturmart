import { prisma } from "../prisma/prisma";

interface SupplierPropos {
    id: string;
    avatar: string;
    name: string;
    nif: string;
    phone: string;
    email: string;
    adress: string;
    info: string;
}

export class SupplierCase {
    async handle({id, avatar, nif, name, phone, email, adress, info}:SupplierPropos){

        const nameExist = await prisma.suppliers.findFirst({
            where:{
                name,
            }
        });

        const emailExists = await prisma.suppliers.findFirst({
            where:{
                name,
            }
        });

        const phoneExists = await prisma.suppliers.findFirst({
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

        const create = await prisma.suppliers.create({
            data:{
                id,
                avatar,
                name,
                nif,
                phone,
                email,
                adress,
                info,
            }
        });

        return create;
    }

    // Selecionar todos os clientes
    async handleSelect(){
        const select = await prisma.suppliers.findMany();
        return select;
    }

    // Selecionar um unico client
    async handleId({id, avatar, name, nif, phone, email, adress, info}:SupplierPropos){
        const selectId = await prisma.suppliers.findFirst({
            where:{
                id
            }
        });

        return selectId;
    }

    // Actualizar
    async handleupdate({id, avatar, nif, name, phone, email, adress, info}:SupplierPropos){
        const supplierUpdate = await prisma.suppliers.update({
            where:{
                id
            },
            data:{
                avatar,
                name,
                nif,
                phone,
                email,
                adress,
                info,
            }
        });

        return supplierUpdate;
    }

    // Eliminar
    async handledelete({id, avatar, name, nif, phone, email, adress, info}:SupplierPropos){
        const clientDelete = await prisma.suppliers.delete({
            where:{
                id
            }
        });

        return clientDelete;
    }
}