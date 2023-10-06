import { prisma } from "../prisma/prisma"

interface orderProductProps {
    id: string
    status: string
    userId: string
    clientId: string
    orderId: string
    productId: string
    qtd: number
    price_unit: number
}

export class OrderProductCase {
    async handle({id, status, userId, clientId, orderId, productId, qtd, price_unit}:orderProductProps){
        const create = await prisma.orders.create({
            data:{
                id,
                status,
                userId,
                clientId,
                orderProducts:{
                    create:{
                        qtd,
                        price_unit,
                        productId,
                    }
                }
            }
        })

        return create;
    }

    async handleSelect(){
        const selectOrder = await prisma.orders.findMany()

        return selectOrder;
    }

    async handleId({id}:orderProductProps){
        const orderId = await prisma.orders.findFirst({
            where:{
                id,
            }
        });

        return orderId;
    }

    async handleUpdate({id, status, userId, clientId, orderId, productId, qtd, price_unit}:orderProductProps){
        
    }

    async handleDelete({id}:orderProductProps){
        const storeDelete = await prisma.store.delete({
            where:{
                id
            }
        });

        return storeDelete;
    }
}