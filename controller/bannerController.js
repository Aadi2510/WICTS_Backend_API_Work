const bannerModel = require('../models/banner.js')


//Home Page Create Banner Data 
exports.createBanner = async (req, res) => {
    const banner = new bannerModel({
        bannerType: req.body.bannerType,
        bannerOrder: req.body.bannerOrder,
        bannerLinkID: req.body.bannerLinkID,
        bannerLink: req.body.bannerLink,
        image: req.file.filename
    })
    banner.save()
        .then(() => {
            res.status(201).json({ message: "Banner Data Created" });
        })
        .catch(err => console.log(err))
}


//View Home Page Banner Data 
exports.getbanner = async (req, res) => {
    let data = await bannerModel.find({})
    res.json(data)
}


//Home Page  Banner Data by ID
exports.viewbanner = async (req, res) => {
    let id = req.params.id
    let data = await bannerModel.find({ _id: id })
    res.json(data)
}


// Delete Home Page Banner Data by ID
exports.deletebanner = async (req, res) => {
    let id = req.params.id
    await bannerModel.findByIdAndDelete({ _id: id })
    res.status(201).json({ message: "Banner Data Deleted" });
}


//Update Home Page Create Banner Data by ID
exports.updatebanner = async (req, res) => {
    let id = req.params.id
    let newData = req.body
    await bannerModel.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "Banner Data Updated" });
}


