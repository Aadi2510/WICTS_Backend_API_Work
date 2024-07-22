let express = require('express')
let mongoose = require('mongoose')

let cors = require('cors')

const db = require('./dataBaseConfig.js')

const dotenv = require('dotenv')

dotenv.config({
    path: './.env'
})


let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())


app.use(express.static('uploads'))




db().then(async () => {

    // List collections
    // const collections = await db.listCollections().toArray();
    // // console.log(collections)
    // console.log('name of collections:', collections.map((data)=>data.name));
    app.listen(process.env.PORT || 8000, () => {
        console.log(`erver is running at port : ${process.env.PORT}`);
    })

    
    // Manage Store Category Route
    const storeRoutes = require('./route/storeRoutes.js')

    //Home Page Create Banner Data Route
    const bannerRoutes = require('./route/bannerRoutes.js')

    // App Users Route
    const appRoutes = require('./route/appRoutes.js')

    //Manage Orders Route
    const orderRoutes = require('./route/orderRoutes.js')

// -------------------End URL-----------------------------
    //Home Page Create Banner Data Route
    app.use('/api', bannerRoutes)

    // Manage Store Category Route
    app.use('/api', storeRoutes)

    // App Users Route
    app.use('/api', appRoutes)

    //Manage Orders Route
    app.use('/api', orderRoutes)

})
    .catch(err => console.log(err))


