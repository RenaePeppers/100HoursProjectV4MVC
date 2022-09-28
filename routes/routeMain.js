const express = require('express')
const router = express.Router()
const authController = require('../controllers/conAuth') 
const homeController = require('../controllers/conHome')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//add specific routes for specific tasks
router.get('/', homeController.getIndex)  //this will render the homepagenow go build the methods so our router has something to retrieve

router.post('/', homeController.createPlan) //this will be for creating a new plan on homepage. now go build the methods so our router has something to retrieve.
//go into controllers/home.js and build out the methods that we can export and our router can call upon
//these get sent to controllers/home.js


router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/commit', authController.getCommit)
router.get('/example', authController.getExample)

module.exports = router