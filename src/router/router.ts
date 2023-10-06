import Router, { Request, Response } from "express";
import { StoreController } from "../controllers/storeController";
import { UserControllers } from "../controllers/userControllers";
import { ClientController } from "../controllers/clientController";
import { CategoryController } from "../controllers/categoryController";
import { UserAuthenticateController } from "../service/authenticate/userAuthenticateController";
import { VericarAutenticação } from "../middlewares/verifyAuthenticate";

const route = Router();

route.get("/", (req:Request, res: Response)=>{
    res.json({message: "Seja bem vindo!"})
})

// Routa de token
const userAuthenticateController = new UserAuthenticateController()
route.post("/login", userAuthenticateController.handle);

//Routas do store
const storeController = new StoreController();
route.post("/store", storeController.create);
route.get("/store", storeController.allStore);
route.put("/store/:id", storeController.update);
route.get("/store/:id", storeController.selectId);

// Routas do usuario
const userContttroller = new UserControllers();
route.get("/user", userContttroller.Select);
route.post("/user", userContttroller.Create);
route.put("/user/:id", userContttroller.Update);
route.get("/user/:id", userContttroller.selectId);
route.delete("/user/:id", userContttroller.Delete);

// Routas do clientes
const clientController = new ClientController();
route.post("/client", clientController.Create);
route.get("/client", VericarAutenticação, clientController.SelectAll);
route.get("/client/:id", clientController.selectId);
route.put("/client/:id", clientController.userUpdate);
route.delete("/client/:id", clientController.deleteUser);

// Routas das Categorias
const categoryController = new CategoryController();
route.get("/category", VericarAutenticação, categoryController.SelectAll);
route.post("/category", VericarAutenticação, categoryController.Create);
route.get("/category/:id", categoryController.selectId);
route.put("/category/:id", categoryController.categoryUpdate);
route.delete("/category/:id", categoryController.deleteCategory);

export {route}