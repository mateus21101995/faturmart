import { prisma } from "../prisma/prisma";

interface StoreProps {
    id: string;
    name: string;
    email: string;
    phone: string;
    nif: string;
    adress: string;
    bio: string;
}

export class StoreCase {

    //Verificação dos dados

    //Criação de uma loja
    async create ({id, name, email, phone, nif, adress, bio}:StoreProps){
        
        const nameExists = await prisma.store.findUnique({
            where:{
                name,
            }
        });

        const emailExists = await prisma.store.findUnique({
            where:{
                email,
            }
        });

        const nifExists = await prisma.store.findUnique({
            where:{
                nif,
            }
        })

        const phoneExists = await prisma.store.findFirst({
            where:{
                phone,
            }
        })

        if(nameExists){
            throw new Error("Já Existe uma Loja com este nome!")
        }

        if(nifExists){
            throw new Error("Este NIF está vinculado a uma conta!")
        }
        
        if(emailExists){
            throw new Error("Este email está vinculado a uma conta!")
        }
        
        if(phoneExists){
            throw new Error("Este NÚMERO está vinculado a uma conta!")
        }

        const createStore = await prisma.store.create({
            data:{
                id,
                name,
                email,
                phone,
                nif,
                adress,
                bio,
            }
        });

        return createStore;
    }

    //Uctualizar o registro da loja
    async update({id, name, email, phone, nif, adress, bio}:StoreProps){
        const updateStore = await prisma.store.update({
            where: {
                id:id
            },
            data:{
                name,
                email,
                phone,
                nif, 
                adress,
                bio,
            }
        })

        return updateStore;
    }

    // Selecionar todas as Lojas
    async all(){
        const allStore = await prisma.store.findMany();
        return allStore;
    }

    // Selecionar Loja actual

    async soreid({id}:StoreProps){
        const selectId = await prisma.store.findFirst({
            where: {
                id,
            }
        })

        return selectId;
    }
}