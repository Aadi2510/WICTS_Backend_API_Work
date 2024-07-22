const orderModel = require('../models/order.js')


//Manage Orders Create Data
exports.createOrder = async (req, res) => {
    const orderData = new orderModel({

        orderID: req.body.orderID,
        store: req.body.store,
        user: req.body.user,
        phone: req.body.phone,
        address: req.body.address,
        totalAmount: req.body.totalAmount
    
    })
    orderData.save()
        .then(() => {
            res.status(201).json({ message: "Order Data Created" });
        })
        .catch(err => console.log(err))
}


//Manage Orders View Data
exports.getOrder = async (req, res) => {
    let data = await orderModel.find({})
    res.json(data)
}


//Manage Orders View by ID Data
exports.viewOrder = async (req, res) => {
    let id = req.params.id
    let data = await orderModel.find({ _id: id })
    res.json(data)
}

//Manage Orders Delete by ID Data
exports.deleteOrder = async (req, res) => {
    let id = req.params.id
    await orderModel.findByIdAndDelete({ _id: id })
    res.status(201).json({ message: "Order Data Deleted" });
}


//Manage Orders Update by ID Data
exports.updateOrder = async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await orderModel.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "Order Data Updated" });
}


