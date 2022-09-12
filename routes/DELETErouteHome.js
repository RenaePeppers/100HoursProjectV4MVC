//handles initial get request for home page
//handles POST method request for add a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/conHome')

//add specific routes for specific tasks
router.get('/', homeController.getIndex)  //this will render the homepagenow go build the methods so our router has something to retrieve
//router.post('/', homeController.createTask) //this will be for creating a new task on homepage. now go build the methods so our router has something to retrieve.
//go into controllers/home.js and build out the methods that we can export and our router can call upon
//these get sent to controllers/home.js
router.post('/', homeController.createPlan) //this will be for creating a new plan on homepage. now go build the methods so our router has something to retrieve.
//go into controllers/home.js and build out the methods that we can export and our router can call upon
//these get sent to controllers/home.js

module.exports = router