import express from "express"
import {UsersController} from "./users.controller.js"
import { UsersRepository } from "./users.repository.js"

const repository = new UsersRepository()
const controller =  new UsersController(repository)

const router = express.Router()

router.get("/", controller.getAllProducts)

router.get("/minus50", controller.getProductsById)

export default router