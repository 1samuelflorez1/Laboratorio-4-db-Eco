import express from "express"
import router from "./routes/users/user.router.js"

const app = express()
const PORT = 5050

const __dirname = import.meta.dirname

app.use(express.json()) 
app.use("/products", router)

// Ruta raíz agregada
app.get("/", (req, res) => {
  res.send("Servidor funcionando ")
})

app.listen(PORT, () => {
    console.log("listening on port", PORT)
})