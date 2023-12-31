const categoryRoute = require('express').Router()
const {create, readAll, readSingle, update, del} = require('../controller/categoryController')


categoryRoute.post(`/add`, create)

categoryRoute.get(`/all`, readAll)

categoryRoute.get(`/single/:id`, readSingle)

categoryRoute.patch(`/update/:id`, update)

categoryRoute.delete(`/delete/:id`, del)

module.exports= categoryRoute