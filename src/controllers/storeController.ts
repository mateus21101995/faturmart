import { Request, Response } from "express";
import { StoreCase } from "../usecase/storeCase";

export class StoreController {

    // Cadastrar
    async create(req: Request, res:Response){
        const {id, name, email, phone, nif, adress, bio} = req.body;
        
        const storeCase = new StoreCase();

        const create = await storeCase.create({
            id,
            name,
            email,
            phone,
            nif,
            adress,
            bio,
        })

        res.json(create)
    }

    // actualizar
    async update(req:Request, res:Response){

        const storeCase = new StoreCase();

        const {name, email, phone, nif, adress, bio} = req.body;
        const id = req.params.id;

        const updateStore = await storeCase.update({
            id,
            name,
            email,
            phone,
            nif,
            adress,
            bio,
        })

        res.json(updateStore)
    }

    // Selecionar todas as lojas
    async allStore(req:Request, res:Response){
        const storeCase = new StoreCase();

        const all = await storeCase.all();
        res.json(all);
    }


    // actualizar
    async selectId(req:Request, res:Response){

        const storeCase = new StoreCase();

        const {name, email, phone, nif, adress, bio} = req.body;
        const id = req.params.id;

        const select = await storeCase.soreid({
            id,
            name,
            email,
            phone,
            nif,
            adress,
            bio,
        })

        res.json(select)
    }
}