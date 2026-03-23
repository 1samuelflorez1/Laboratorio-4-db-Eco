import express from "express"
import {UsersController} from "./users.controller.js"
import { UsersRepository } from "./users.repository.js"

const repository = new UsersRepository()
const controller =  new UsersController(repository)

const router = express.Router()

router.get("/", controller.getAllProducts)

router.get("/electronic30", controller.getElectronicalProducts30)

router.get("/minus50", controller.getProductsById)

router.get("/users", controller.getAllUsers)

router.get("/users/specific", controller.getAllUsersNameEmail)

router.get("/orders", controller.getAllOrders)

router.get("/poststutorial", controller.getPostsTutorial)

router.get("/limitproducts", controller.getLimitProductsOffset)

router.get("/individualuserproducts", controller.getIndividualUserProducts)


export default router