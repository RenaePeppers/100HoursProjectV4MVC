//const  TodoTask = require('../models/todotask')  //require path .  we are going to models folder which exported TodoTask
const WeightDataModel = require('../models/WeightDataModel')

module.exports = {   
    getIndex : async (request, response) => {
        try {
          response.render('index.ejs',{title:"Initial Set Up"})   //if html, would use sendFile instead of render? title is for layout.ejs
        } catch (error) {
            response.status(500).send({message:error.message})
        }
    },
    
    
    createPlan:  async (req, res) => {   
        try {
            for (i=0; i<=2; i++){
             let writeNewPlanToDB = new WeightDataModel(
                 {       
                dbtodaysdaynumber: i,
                dbusername: req.body.dbusername2
                 }); 
            await writeNewPlanToDB.save();
             }    
            res.redirect("/daily");  
        } 
        catch (err) {
            if (err) return res.status(500).send(err);
        } 
    }
}


