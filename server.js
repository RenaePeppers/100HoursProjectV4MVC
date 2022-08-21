//DECLARE VARIABLES************************************************************* *//
const express = require('express')
const app = express()  
const mongoose = require("mongoose")
const expressLayouts = require('express-ejs-layouts')  //v3
const cors = require('cors')
const connectDB = require("./config/database")
//const MongoClient=require('mongodb').MongoClient
const homeRoutes = require("./routes/routeHome")
require('dotenv').config({path:'./config/.env'})

//CONNECT TO DATABASE************************************************************ *//
connectDB()

//SET MIDDLEWARE**************************************************************** *//
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(expressLayouts)   
app.use(express.urlencoded({ extended: true }));
app.use(express.json())  //middleware helps express parse json objects  MAY NOT BE NEEDED
app.use(cors()); //MAY NOT BE NEEDED

//SET ROUTES***************************************************************** *//
app.use('/', homeRoutes)
//app.use('/edit', editRoutes)


//START SERVER***************************************************************** *//
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port `)
})   