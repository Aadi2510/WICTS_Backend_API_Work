const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const storeController = require('../controller/storeController.js')

// Manage Store Category Route Data Insert
router.post('/createStore', upload.single('image'), storeController.createStore)

// Manage Store Category Route Data All Data View
router.get('/getStore', storeController.getStore)

// Manage Store Category Route Data Update by ID

router.put('/updateStore/:id', upload.single('image'), storeController.updateStore)

// Manage Store Category Route Data Delete by ID
router.delete('/deleteStore/:id', storeController.deleteStore)


module.exports = router

