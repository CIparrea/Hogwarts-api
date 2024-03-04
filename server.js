import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/api", routes)

bd.on("connected",() => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB"));

    app.listen(PORT, () => {
        console.log(chalk.magenta(`Express server tunning on port ${{PORT}}`))
    })
})