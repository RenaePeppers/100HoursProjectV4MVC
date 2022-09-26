const express = require('express')
const router = express.Router() //require the router component of express
const dailyController = require('../controllers/conDaily')
const { ensureAuth } = require('../middleware/auth')

router.put("/dailyEntry", dailyController.dailyEntry);

//add specific routes for specific tasks
router.get('/', ensureAuth, dailyController.getDaily)  //this will render the daily page.  now go build the methods so our router has something to retrieve
//router.post('/', homeController.createTask) //this will be for creating a new task on homepage. now go build the methods so our router has something to retrieve.
//go into controllers/daily.js and build out the methods that we can export and our router can call upon
//these get sent to controllers/daily.js

//you just use'/' and not '/daily' because you are already on the daily path
//when you have a username, you will probably have .get('/:dbusername, ) at about 3:20 on Let Practice MVC! 4:26 long

module.exports = router