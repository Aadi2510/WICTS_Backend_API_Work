const express = require('express');
const router = express.Router();


const appController = require('../controller/appController.js')

// App Users

router.post('/appUser', appController.appUser)

router.get('/getAppUser', appController.getAppUser)


module.exports = router

