const Commit = require("../models/WeightDataModel");

module.exports = {
  createCommit: async (req, res) => {
    try {
      for(i=0; i<1; i++){
      await Commit.create({             //Commit model
            dbgoaldeficit: req.body.goaldeficit,  //from form name="goaldeficit"
            dbtodaysweight:req.body.startweight,
            dbstartweight:req.body.startweight, 
            user:req.user.id,
            dbtodaysdaynumber:i,  
            dbdailygoalweight:req.body.startweight-(i)*req.body.goaldeficit/3500      
          });
        }
      for(i=1; i<=35; i++){
        await Commit.create({             //Commit model
            dbgoaldeficit: req.body.goaldeficit,  //from form name="goaldeficit"
            dbstartweight:req.body.startweight, 
            user:req.user.id,
            dbtodaysdaynumber:i,  
            dbdailygoalweight:req.body.startweight-(i)*req.body.goaldeficit/3500      
          });
      }

    console.log("Plan has been committed!");
    res.redirect("/daily");  //takes themto daily.ejs
    } catch (err) {
      console.log(err);
    }
  }
}
