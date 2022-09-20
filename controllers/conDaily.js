const weightData = require('../models/WeightDataModel')

module.exports = {   
    getDaily : async (req, res) => {
        console.log(req.user)
        try {
            const weightDataItems = await weightData.find({user:req.user.id})
            res.render('daily.ejs', {weightData: weightDataItems,  user: req.user})
        }catch(err){
            console.log(err)
        } 
    }
}