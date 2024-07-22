const express = require('express');
const router = express.Router();

const orderController = require('../controller/orderController.js')

//Manage Orders Route Data Create
router.post('/createOrder', orderController.createOrder)

//Manage Orders Route View Data
router.get('/getOrder', orderController.getOrder)

//Manage Orders Route View by ID Data
router.get('/viewOrder/:id', orderController.viewOrder)

//Manage Orders Route Update by ID Data
router.put('/updateOrder/:id', orderController.updateOrder)

//Manage Orders Route Delete by ID Data
router.delete('/deleteOrder/:id', orderController.deleteOrder)


module.exports = router

