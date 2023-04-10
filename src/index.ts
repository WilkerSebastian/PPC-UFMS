import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import router from './router'
import { resolve } from 'path'

const PORT = Number(process.env.PORT || 8080)

const modo = process.env.NODE_ENV as string

const dir = modo == "production" ? "build" : "src"

const app = express()

app.use("/public", express.static(resolve(`./${dir}/public`)))
app.use("/jquery", express.static(resolve(`./node_modules/jquery/dist`)))
app.use("/bootstrap", express.static(resolve("./node_modules/bootstrap/dist")))

app.use(router)

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}, em modo ${modo}`))