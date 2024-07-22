const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const bannerController = require('../controller/bannerController.js')

//Home Page Create Banner Data 
router.post('/createBanner',upload.single('image'), bannerController.createBanner)

//View Home Page  Banner Data 
router.get('/getbanner', bannerController.getbanner)

//View Home Page Banner Data by ID
router.get('/viewbanner/:id', bannerController.viewbanner)

//Update Home Page Banner Data by ID
router.put('/updatebanner/:id',upload.single('image'), bannerController.updatebanner)

// Delete Home Page Banner Data by ID
router.delete('/deletebanner/:id', bannerController.deletebanner)


module.exports = router

