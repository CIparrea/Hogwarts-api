import House from "../models/House.js"

export const getHouses = async (req, res) => {
    try{
        const house = await House.find();
        res.json(house)
    }catch(error){
        console.error(error)
        res.status(500).json({ error : error.message})
    }
}

export const getHouse = async (req, res) => {
    try{
        const { id } = req.params
        const house = await House.findById(id)

        if(house){
            return res.json(house)
        }

        res.status(404).json({ message: "house not found!"});
    }catch(error){
        console.error(error)
        res.status(500).json({ error : error.message})
    }
}

export const createHouse = async (req, res) => {
    try{
        const house = Hous(req.body) 
        await house.save()  

        res.status(201).json(house)
    }catch(error){
        console.error(error)
        res.status(500).json({ error : error.message})
    }
}

export const updateHouse = async (req, res) => {
    try{
        const { id } = req.params

        const house = await House.findByIdAndUpdate(id, req.body)
       
        res.status(201).json(house)
    }catch(error){
        console.error(error)
        res.status(500).json({ error : error.message})
    }
}

export const deleteHouse = async (req, res) => {
    try{
        const { id } = req.params

        const deleted = await House.findByIdAndDelete(id)
       
        if(deleted){
            return res.status(200).send("House Deleted")
        }

        throw new Error("House not found.")
        
    }catch(error){
        console.error(error)
        res.status(500).json({ error : error.message})
    }
}