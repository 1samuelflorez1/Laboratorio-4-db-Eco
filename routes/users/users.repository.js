import { pool } from "../clients/supabase-db.js"

export class UsersRepository {
    getAllProducts = async () => {
        const result = await pool.query("SELECT * FROM products")

        return result.rows  
    }

    getElectronicalProducts30 = async () => {
        const result = await pool.query("SELECT * FROM products WHERE price > 30 AND category = 'electronica'")

        return result.rows  
    }

    getProductsById = async () => {
        const result = await pool.query("SELECT * FROM products WHERE price < 50;")
        console.log(result)
        return result.rows[0]
    }

    getAllUsers = async () => {
        const result = await pool.query("SELECT * FROM users")
        console.log(result)
        return result.rows
    }

    getAllUsersNameEmail = async () => {
        const result = await pool.query("SELECT username, email FROM users")
        console.log(result)
        return result.rows
    }

    getAllOrders = async () => {
        const result = await pool.query("SELECT * from orders ORDER BY created_at DESC")
        console.log(result)
        return result.rows
    }

    getPostsTutorial = async () => {
        const result = await pool.query("SELECT * FROM posts WHERE title LIKE '%tutorial%'")
        console.log(result)
        return result.rows
    }

    getLimitProductsOffset = async () => {
        const result = await pool.query("SELECT * FROM products ORDER BY id LIMIT 2 OFFSET 4")
        console.log(result)
        return result.rows
    }

    getIndividualUserProducts = async () => {
        const result = await pool.query("SELECT * FROM products2 WHERE user_id = 1")
        console.log(result)
        return result.rows
    }
}

