export class UsersController {

    constructor(repository){
        this.repository = repository
    }

    getAllProducts = async (req, res) => { 
        res.send({users: await this.repository.getAllProducts()})
    }

    getElectronicalProducts30 = async (req, res) => { 
        res.send({users: await this.repository.getElectronicalProducts30()})
    }

    getAllUsers = async (req, res) => { 
        res.send({users: await this.repository.getAllUsers()})
    }

    getAllUsersNameEmail = async (req, res) => { 
        res.send({users: await this.repository.getAllUsersNameEmail()})
    }

    getAllOrders = async (req, res) => { 
        res.send({users: await this.repository.getAllOrders()})
    }

    getPostsTutorial = async (req, res) => { 
        res.send({users: await this.repository.getPostsTutorial()})
    }

    getLimitProductsOffset = async (req, res) => { 
        res.send({users: await this.repository.getLimitProductsOffset()})
    }

    getIndividualUserProducts = async (req, res) => { 
        res.send({users: await this.repository.getIndividualUserProducts()})
    }
    
    getProductsById = async (req, res) => {
       const id = Number(req.params.id) 
       const UserIndividual = await this.repository.getProductsById(id)
    
       if(!UserIndividual){
        res.send("No lo encontramos")
        return
       }
       res.send(UserIndividual)
    }
}

