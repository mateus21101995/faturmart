import { prisma } from "../prisma/prisma"

interface ProdutProps {
    id: string
    avatar: string
    code: string
    name: string
    price: number
    stock: number
    description: string
    categoryId: string
    supplierId: string
}

export class ProdutCase {
    async handle({id, avatar, code, name, price, stock, description, categoryId, supplierId}: ProdutProps){
        const create = await prisma.products.create({
            data:{
                id,
                avatar,
                code,
                name,
                price,
                stock,
                description,
                categoryId,
                supplierId,
            }
        })

        return create;
    }

    async handleSelect(){
        const selectProduct = await prisma.products.findMany();
        return selectProduct;
    }

    async handleId({id}: ProdutProps){
        const selectProduct = await prisma.products.findFirst({
            where:{
                id,
            }
        })
        
        return selectProduct;
    }

    async handleUpdate({id, avatar, code, name, price, stock, description, categoryId, supplierId}: ProdutProps){
        const updateProduct = await prisma.products.update({
            where:{
                id,
            },
            data:{
                avatar,
                name,
                code,
                price,
                stock, 
                description,
                categoryId,
                supplierId
            }
        })

        return updateProduct;
    }

    async handleDelete({id}: ProdutProps){
        const deleteProduct = await prisma.products.delete({
            where:{
                id,
            }
        })

        return deleteProduct;
    }
}