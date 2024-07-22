const mongoose = require('mongoose');
let storeCatagory = require('../models/storeCatagory.js')




// Manage Store Category Data Save
exports.createStore = (req, res) => {

    let storeData = new storeCatagory({
        catagoryName: req.body.catagoryName,
        sortOrder: req.body.sortOrder,
        image: req.file.filename
    });
    console.log(storeData)
    storeData.save()
        .then(() => res.status(201).json({ message: "Store Data Created" }))
        .catch(err => console.log(err))
}


// Manage Store Category Data View
exports.getStore = async (req, res) => {
    let data = await storeCatagory.find({})
    res.json(data)
}


// Manage Store Category Data Delete
exports.deleteStore = async (req, res) => {
    let id = req.params.id;
    await storeCatagory.findByIdAndDelete({ _id: id })
    res.status(201).json({ message: "Store Data Deleted" });
}


// Manage Store Category Data Updated
exports.updateStore = async (req, res) => {
    let id = req.params.id;
    let newData = req.body;
    await storeCatagory.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "Store Data Updated" });
}





