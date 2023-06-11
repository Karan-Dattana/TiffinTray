const User = require("../models/User");
const Tiffin = require("../models/Tiffin");
const tiffinController = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

//get all tiffin services

tiffinController.get('/getAll', async (req, res) => {
    try {
        const tiffinServices = await Tiffin.find({})

        console.log(tiffinServices)

        return res.status(200).json(tiffinServices)
    } catch (error) {
        console.error(error)
    }
})



// create tiffin estate
tiffinController.post('/', async (req, res) => {
    try {
        const newTiffin = await Tiffin.create({ ...req.body})
        console.log(newTiffin);
        return res.status(201).json(newTiffin)
    } catch (error) {
        return res.status(500).json(error)
    }
})



// fetch my tiffin services
tiffinController.get('/find/my-tiffinServices', verifyToken, async (req, res) => {
    
    try {
        console.log("my-tiffin services!")
        console.log(req.user.id);
        // const properties = await Tiffin.find({_id : req.user.id})
        const properties = await Tiffin.findById(req.user.id)
        
        return res.status(200).json(properties)
        
    } catch (error) {
        console.error(error)
    }
})


// get all from type tiffin services
tiffinController.get('/find', async (req, res) => {
    const type = req.query
    
    try {
        if (type) {
            tiffinServices = await Tiffin.find({category : type.type})
        } else {
            tiffinServices = await Tiffin.find({})
        }
        return res.status(200).json(tiffinServices);
    } catch (error) {
        return res.status(500).json(error)
    }
})


// TODO FETCH INDIVIDUAL PROPERTY
tiffinController.get('/find/:id', async (req, res) => {
    // console.log(req.params.id);
    try {
        const property = await Tiffin.findById(req.params.id);
        console.log(property)
        if (!property) {
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
    console.log("property fetching!");
})


module.exports = tiffinController;