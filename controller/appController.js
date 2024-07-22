const appUserModel = require('../models/appUser.js')


//Create App Users Data 

exports.appUser = async (req, res) => {
    const appUserData = new appUserModel({
        
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        regDate: req.body.regDate,
        totalOrder: req.body.totalOrder,
        wallet: req.body.wallet

    })
    appUserData.save()
        .then(() => {
            res.status(201).json({ message: "App User Data Created" });
        })
        .catch(err => console.log(err))
}


// Get App Users Data

exports.getAppUser = async (req, res) => {
    let data = await appUserModel.find({})
    res.json(data)
}



