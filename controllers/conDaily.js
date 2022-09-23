const weightData = require('../models/WeightDataModel')

module.exports = {   
    getDaily : async (req, res) => {
        console.log(req.user)
        try {
            const weightDataItems = await weightData.find({user:req.user.id})
            console.log(weightDataItems)

            res.render('daily.ejs', {weightData: weightDataItems, user: req.user})
            
        }catch(err){
            console.log(err)
        } 
    },
    dailyEntry: async (req, res) => {
        try {
          await Post.findOneAndUpdate(
            { _id: req.params.id,
                dbtodaysdaynumber:req.body.day,
               dbtodaysweight:req.body.weight,
               dbyesterdaycalin: req.body.calin,
               dbyesterdaycalout: req.body.calout,
            },
            
          );
          console.log("Likes +1");
          res.redirect(`/post/${req.params.id}`);
        } catch (err) {
          console.log(err);
        }
      },
    
}