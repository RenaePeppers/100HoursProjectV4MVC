//const  TodoTask = require('../models/todotask')  //require path .  we are going to models folder which exported TodoTask

module.exports = {   //this used to be an app.get block in server.js. 
    getIndex : async (request, response) => {
        try {
          response.render('index.ejs',{title:"Initial Set Up"})   //if html, would use sendFile instead of render? title if for layout.ejs
        } catch (error) {
            response.status(500).send({message:error.message})
        }
    }
}

