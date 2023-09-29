const {StatusCodes} = require('http-status-codes')
const Order = require('../model/orderModel')


const create = async (req,res) => {
    try{
        let newOrder = await Order.create(req.body)
        
        res.status(StatusCodes.OK).json({ msg: "order generated successfully", order: newOrder })
       
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const readAll = async (req,res) => {
    try{
        let order = await Order.find()
        
         res.status(StatusCodes.OK).json({ length: orders.length, orders})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const readSingle = async (req,res) => {
    try{
        let id = req.params.id
        let single = await Order.findById({ _id: id })
        if(!single)
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested id not found`})

        res.status(StatusCodes.OK).json({ order: single })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const updateOrder = async (req,res) => {
    try{
        let id = req.params.id
        let single = await Order.findById({ _id: id })
            if(!single)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested order id not found `})

            await Order.findByIdAndUpdate({_id: id }, req.body)
            res.status(StatusCodes.OK).json({ msg: "order details updtaed " })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const deleteOrder = async (req,res) => {
    try{
        let id = req.params.id
        let single = await Order.findById({ _id: id })
            if(!single)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested order id not found `})

            await Order.findByIdAndDelete({_id: id })

            res.status(StatusCodes.OK).json({ msg: "order deleted successfully" })
        res.json({ msg: "delete"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = { create, readAll, readSingle, updateOrder, deleteOrder}