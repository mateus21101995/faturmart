import { prisma } from "../prisma/prisma";

interface CategoryPropos {
    id: string;
    name: string;
}

export class CategoryCase {
    async handle({id, name}:CategoryPropos){

        const nameExists = await prisma.category.findFirst({
            where:{
                name,
            }
        });

        if(nameExists){
            throw new Error("Está categoria já existe!")
        }

        const createCategory = await prisma.category.create({
            data:{
                id,
                name,
            }
        });

        return createCategory;
    }

    // Selecionar todos os clientes
    async handleSelect(){
        const select = await prisma.category.findMany();
        return select;
    }

    // Selecionar um unico client
    async handleId({id, name}:CategoryPropos){
        const selectId = await prisma.category.findFirst({
            where:{
                id
            }
        });

        return selectId;
    }

    // Actualizar
    async handleupdate({id, name}:CategoryPropos){
        const categoryUpdate = await prisma.category.update({
            where:{
                id
            },
            data:{
                name,
            }
        });

        return categoryUpdate;
    }

    // Eliminar
    async handledelete({id, name}:CategoryPropos){
        const categoryDelete = await prisma.category.delete({
            where:{
                id
            }
        });

        return categoryDelete;
    }
}