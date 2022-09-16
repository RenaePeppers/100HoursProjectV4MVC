const Commit = require("../models/WeightDataModel");

module.exports = {
  createCommit: async (req, res) => {
    try {
        await Commit.create({  //Commit model
        dbgoaldeficit: req.body.goaldeficit,  //from form name="goaldeficit"
        dbstartweight:req.body.startweight, 
        user:req.user.id,

      });
      console.log("Plan has been committed!");
      res.redirect("/daily");  //takes them back to daily.ejs
    } catch (err) {
      console.log(err);
    }
  },
 
};
