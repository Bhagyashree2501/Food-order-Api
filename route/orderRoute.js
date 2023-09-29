const orderRoute = require('express').Router()
const { create, readAll, readSingle, updateOrder, deleteOrder } = require('../controller/orderController')

orderRoute.post(`/add`, create)
orderRoute.get(`/all`, readAll)
orderRoute.get(`/single/:id`, readSingle)
orderRoute.patch(`/update/:id`, updateOrder)
orderRoute.delete(`/delete/:id`, deleteOrder)

module.exports = orderRoute