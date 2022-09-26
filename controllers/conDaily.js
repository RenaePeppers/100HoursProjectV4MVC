const weightData = require('../models/WeightDataModel')

module.exports = {   
    getDaily : async (req, res) => {
        console.log(req.user)
        try {
            const weightDataItems = await weightData.find({user:req.user.id})
            // console.log(weightDataItems)

            res.render('daily.ejs', {weightData: weightDataItems, user: req.user})
            
        }catch(err){
            console.log(err)
        } 
    },

    // I think this dailyEntry isn't used and needs deleted
    dailyEntry: async (req, res) => {
        try {
          await Post.findOneAndUpdate({"user.id":user.id,"dbtodaysdaynumber":req.body.day},
            {  dbtodaysweight:req.body.weight,
               dbyesterdaycalin: req.body.calin,
               dbyesterdaycalout: req.body.calout,
            },
            
          );
          console.log("daily data entry complete");
          res.redirect("/daily");  //takes them back to daily.ejs
        } catch (err) {
          console.log(err);
        }
      },
    
}