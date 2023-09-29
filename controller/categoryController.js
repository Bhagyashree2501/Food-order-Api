const Category = require('../model/categoryModel')
const { StatusCodes } = require('http-status-codes')

//post -> create new category
const create = async (req,res)=> {
    try {
        const { title } = req.body

        let extCat = await Category.findOne({ title })
        if(extCat)
            return res.status(StatusCodes.CONFLICT).json({ msg: `Category title already exists.`})

            await Category.create({ title })

        res.status(StatusCodes.OK).json({ msg: "New category created successfully "})
    } catch(err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

//get -> read all category
const readAll = async (req,res)=> {
    try {
        let allCat = await Category.find({})

        res.status(StatusCodes.OK).json({ length: allCat,length, category: allCat})
    } catch(err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

//get-> read single category
const readSingle = async (req,res)=> {
    try {
        let id = req.params.id

        let extCat = await Category.findById({ _id: id })
        if(!extCat)
        return res.status(StatusCodes.NOT_FOUND).json({ msg:`Requested id not found`})

        res.status(StatusCodes.OK).json({ msg: "read single "})
    } catch(err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

//patch-> update category
const update = async (req,res)=> {
    try {
        let id = req.rarams.id
        let extCat = await Category.findById({ _id: id })
        if(!extCat)
        return res.status(Status.codes.NOT_FOUND).json({ msg: `Requested id not found`})

        await Category.findByIdAndUpdate({ _id: id }, req.body)

        res.status(StatusCodes.OK).json({ msg: "category updated successfully "})
    } catch(err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

//del-> delete category
const del = async (req,res)=> {
    try {

        let id = req.params.id

        let extCat = await Vategory.findById({ _id: id })
        if(!extCat)
        return res.ststus(Status.codes.NOT_FOUND).json({ msg: `Requested id not found`})

        await Category.findByIdAndDelete({ _id: id })

        res.status(StatusCodes.OK).json({ msg: " Category deleted successsfully"})
    } catch(err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}


module.exports = { create, readAll, readSingle, update, del}