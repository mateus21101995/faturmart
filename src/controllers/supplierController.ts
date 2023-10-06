import { Request, Response } from "express";
import { SupplierCase } from "../usecase/supplierCase";


export class SupplierCpntroller {

    
    // Cadastrar um cliente
    async Create(req:Request, res:Response){
        const {id, avatar, name, nif, phone, email, adress,info} = req.body;
        const supplierCase = new SupplierCase();
        const createUser = await supplierCase.handle({
            id,
            avatar,
            name,
            nif,
            phone,
            email,
            adress,
            info,
        });
        res.json(createUser);
    }

    // Listar todos os clientes
    async SelectAll(req:Request, res:Response){
        const supplierCase = new SupplierCase();
        const select = await supplierCase.handleSelect();
        res.json(select);
    }

    // Listar um unico cliente
    async selectId(req:Request, res:Response){
        const {avatar, name, nif, phone, email, adress, info} = req.body;
        const id = req.params.id
        const supplierCase = new SupplierCase();
        const userId = await supplierCase.handleId({
            id,
            avatar,
            nif,
            name,
            phone,
            email,
            adress,
            info,
        });
        res.json(userId);
    }

    // Actualizar
    async userUpdate(req:Request, res:Response){
        const {avatar, name, nif, phone, email, adress, info} = req.body;
        const id = req.params.id
        const supplierCase = new SupplierCase();
        const clientUpdate = await supplierCase.handleupdate({
            id,
            avatar,
            name,
            nif,
            phone,
            email,
            adress,
            info
        });
        res.json(clientUpdate);
    }

    // Eliminar um unico cliente
    async deleteUser(req:Request, res:Response){
        const {avatar, name, nif, phone, email, adress, info} = req.body;
        const id = req.params.id
        const supplierCase = new SupplierCase();
        const deleteUser = await supplierCase.handledelete({
            id,
            avatar,
            name,
            nif,
            phone,
            email,
            adress,
            info
        });
        res.json(deleteUser);
    }
}