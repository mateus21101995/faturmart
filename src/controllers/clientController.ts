import { Request, Response } from "express";
import { ClientCase } from "../usecase/clientCase";


export class ClientController {
    // Cadastrar um cliente
    async Create(req:Request, res:Response){
        const {id, avatar, name, phone, email, adress} = req.body;
        const clientCase = new ClientCase();
        const createUser = await clientCase.handle({
            id,
            avatar,
            name,
            phone,
            email,
            adress,
        });
        res.json(createUser);
    }

    // Listar todos os clientes
    async SelectAll(req:Request, res:Response){
        const clientCase = new ClientCase();
        const select = await clientCase.handleSelect();
        res.json(select);
    }

    // Listar um unico cliente
    async selectId(req:Request, res:Response){
        const {avatar, name, phone, email, adress} = req.body;
        const id = req.params.id
        const clientCase = new ClientCase();
        const userId = await clientCase.handleId({
            id,
            avatar,
            name,
            phone,
            email,
            adress,
        });
        res.json(userId);
    }

    // Actualizar
    async userUpdate(req:Request, res:Response){
        const {avatar, name, phone, email, adress} = req.body;
        const id = req.params.id
        const clientCase = new ClientCase();
        const clientUpdate = await clientCase.handleupdate({
            id,
            avatar,
            name,
            phone,
            email,
            adress,
        });
        res.json(clientUpdate);
    }

    // Eliminar um unico cliente
    async deleteUser(req:Request, res:Response){
        const {avatar, name, phone, email, adress} = req.body;
        const id = req.params.id
        const clientCase = new ClientCase();
        const deleteUser = await clientCase.handledelete({
            id,
            avatar,
            name,
            phone,
            email,
            adress,
        });
        res.json(deleteUser);
    }
}