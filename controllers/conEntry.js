const weightData = require('../models/WeightDataModel')

module.exports = {   
    getEntry : async (req, res) => {
        console.log(req.user)
        console.log(req.params.id)
        try {
            const weightDataItems = await weightData.findById(req.params.id);
            console.log(weightDataItems)
            console.log("got to here")

            res.render("dataentry.ejs", {weightData: weightDataItems, user: req.user})
            console.log('okay')
            
        }catch(err){
            console.log(err)
        } 
    },
    dailyEntry: async (req, res) => {
        console.log('running /entry/dailyEntry')
        try {
          await weightData.findOneAndUpdate({ _id: req.params.id },
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