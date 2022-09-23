//DECLARE VARIABLES************************************************************* *//
const express = require('express')
const app = express()  
const mongoose = require("mongoose")
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')  //v3
const cors = require('cors')
const connectDB = require("./config/database")
//const MongoClient=require('mongodb').MongoClient
const mainRoutes = require("./routes/routeMain")
//const homeRoutes = require("./routes/routeHome")
const dailyRoutes = require("./routes/routeDaily")
const commitRoutes = require("./routes/routeCommit")
const entryRoutes = require("./routes/routeEntry")
const { config } = require('dotenv')
require('dotenv').config({path:'./config/.env'})

require('./config/passport')(passport)

//CONNECT TO DATABASE************************************************************ *//
connectDB()

//SET MIDDLEWARE**************************************************************** *//
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(expressLayouts)   
app.use(express.urlencoded({ extended: true }));
app.use(express.json())  //middleware helps express parse json objects  MAY NOT BE NEEDED
app.use(cors()); //MAY NOT BE NEEDED
app.use(logger('dev'))

//
//Use forms for put / delete
app.use(methodOverride("_method"));

//SESSIONS***************************************************************** *//
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING}),
    })
  )

//PASSPORT MIDDLEWARE****************************************************** *//
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//SET ROUTES***************************************************************** *//

app.use('/', mainRoutes)
app.use('/daily', dailyRoutes)
app.use("/commit", commitRoutes)  
app.use("/entry", entryRoutes)

//START SERVER***************************************************************** *//
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port `)
})   