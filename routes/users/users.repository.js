import { pool } from "../clients/supabase-db.js"

export class UsersRepository {
    getAllProducts = async () => {
        const result = await pool.query("SELECT * FROM products")

        return result.rows  
    }
    
    getProductsById = async () => {
        const result = await pool.query("SELECT * FROM products WHERE price < 50;")
        console.log(result)
        return result.rows[0]
    }
}

