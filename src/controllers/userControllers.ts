import { Request, Response } from "express";
import { UserCase } from "../usecase/userCase";

export class UserControllers {

    // Criar um novo usuario
    async Create(req:Request, res:Response){
        const {id, avatar, name, phone, email, password, storeId} = req.body;
        const userCase = new UserCase();

        const create = await userCase.handle({
            id,
            avatar,
            name,
            phone,
            email,
            password,
            storeId,
        });

        res.json(create);
    }

    // Selecionar todos os usuarios
    async Select(req:Request, res:Response){
        const userCase = new UserCase();
        const select = await userCase.handleSelect();
        res.json(select);
    }

    // Selecionar Id
    async selectId(req:Request, res:Response){
        const userCase = new UserCase();
        const id = req.params.id
        const {avatar, name, phone, email, password, storeId} = req.body;
        const selectId = userCase.handleSelectId({
            id,
            avatar,
            name,
            phone,
            email,
            password,
            storeId,
        })

        res.json(selectId);
    }

    // Selecionar Id
    async Update(req:Request, res:Response){
        const userCase = new UserCase();
        const id = req.params.id
        const {avatar, name, phone, email, password, storeId} = req.body;
        const updatetId = userCase.handleUpdate({
            id,
            avatar,
            name,
            phone,
            email,
            password,
            storeId,
        })

        res.json(updatetId);
    }

    // Eliminar
    async Delete(req:Request, res:Response){
        const userCase = new UserCase();
        const id = req.params.id
        const {avatar, name, phone, email, password, storeId} = req.body;
        const userDelete = userCase.handleDelete({
            id,
            avatar,
            name,
            phone,
            email,
            password,
            storeId,
        })

        res.json(userDelete);
    }
}