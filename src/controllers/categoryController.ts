import { Request, Response } from "express";
import { CategoryCase } from "../usecase/categoryCase";


export class CategoryController {
    // Cadastrar um cliente
    async Create(req:Request, res:Response){
        const {id, name} = req.body;
        const categoryCase = new CategoryCase();
        const createUser = await categoryCase.handle({
            id,
            name,
        });
        res.json(createUser);
    }

    // Listar todos os clientes
    async SelectAll(req:Request, res:Response){
        const categoryCase = new CategoryCase();
        const select = await categoryCase.handleSelect();
        res.json(select);
    }

    // Listar um unico cliente
    async selectId(req:Request, res:Response){
        const {name} = req.body;
        const id = req.params.id
        const categoryCase = new CategoryCase();
        const categoryId = await categoryCase.handleId({
            id,
            name,
        });
        res.json(categoryId);
    }

    // Actualizar
    async categoryUpdate(req:Request, res:Response){
        const {name} = req.body;
        const id = req.params.id
        const categoryCase = new CategoryCase();
        const categoryUpdate = await categoryCase.handleupdate({
            id,
            name,
        });
        res.json(categoryUpdate);
    }

    // Eliminar um unico cliente
    async deleteCategory(req:Request, res:Response){
        const {name} = req.body;
        const id = req.params.id
        const categoryCase = new CategoryCase();
        const deletecategory = await categoryCase.handledelete({
            id,
            name,
        });
        res.json(deletecategory);
    }
}