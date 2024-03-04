import Character from "../models/Character.js"

export const getCharacters = ((req,res) => {
    res.send("Here are all your characters")
})