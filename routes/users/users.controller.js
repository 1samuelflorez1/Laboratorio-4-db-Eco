export class UsersController {

    constructor(repository){
        this.repository = repository
    }

    getAllProducts = async (req, res) => { 
        res.send({users: await this.repository.getAllProducts()})
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

