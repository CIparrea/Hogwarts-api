import db from "../db/connection.js";
import Character from "../models/Character.js";
import House from "../models/House.js";
import charactersData from "./characters.json" assert { type: "json"};
import housesData from "./houses.json" assert { type: "json"};
import chalk from "chalk";

const insertData = async () => {
    await db.dropDatabase();
    await Character.create(charactersData);
    await House.create(housesData);

    console.log(chalk.greenBright("Characters and Houses created"));

    await db.close();
}

insertData()


