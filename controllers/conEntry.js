const weightData = require('../models/WeightDataModel')
const User = require('../models/User')

module.exports = {   

  /*   getEntry is triggered by clicking on a href in table.  it gets the data for a single day by document id and renders the dataentry.ejs page where you can input data for that day. */

    getEntry : async (req, res) => {
        console.log(req.user)
        console.log(req.params.id)
        try {
            const weightDataItems = await weightData.findById(req.params.id);
            // console.log(weightDataItems)
            console.log("got to here")
            res.render("dataentry.ejs", {weightData: weightDataItems, user: req.user})
            console.log('okay')
            
        }catch(err){
            console.log(err)
        } 
    },

/*     dailyEntry is triggered when you click on the Put/Post button on the one day entry page (dataentry.ejs).  it finds the database entry based on document id and updates(puts) the data in for that day.  it then renders the updateavg.ejs page. */

    dailyEntry: async (req, res) => {
        console.log('running /entry/dailyEntry')
        console.log('this is id for day'+ req.params.id)
        
        try {
            await weightData.findOneAndUpdate({ _id: req.params.id },
            {  dbtodaysweight:req.body.weight,
               dbyesterdaycalin: req.body.calin,
               dbyesterdaycalout: req.body.calout,
               dbyesterdaydeficit:req.body.calout - req.body.calin,
            },);
            const weightDataItems = await weightData.find({ _id: req.params.id })

            const weightDataItemsAll = await weightData.find({user:req.user.id}) 
           /*  console.log(weightDataItems)
            console.log('here are '+ weightDataItemsAll) */
          console.log("daily data entry complete");
          res.render("updateavg.ejs", {weightData: weightDataItems, weightDataAll: weightDataItemsAll, user: req.user})
        } catch (err) {
          console.log(err);
        }
    },
    updateAvg: async (req, res) => {
      console.log('running /entry/updateAvg')
      console.log(req.params.id +'this is the params')
      try {
        const weightDataItemsAll = await weightData.find({user:req.user.id}) //this is all weightData days for this user
        const weightDataItems = await weightData.find({ _id: req.params.id }) //this is today's weightData for this user
        
        console.log('today:'+weightDataItems[0].dbtodaysdaynumber) //returns today
        console.log('or:' + weightDataItemsAll[0].dbtodaysdaynumber)//returns day 0

        if(weightDataItems[0].dbtodaysdaynumber ===1){
          yestAvgDef=weightDataItemsAll[1].dbyesterdaydeficit //if today is day1, yesterdays avg is yesterday's deficit (day 0 : avg is only that day)
        }else{
          yestAvgDef=((weightDataItems[0].dbyesterdaydeficit) + weightDataItemsAll[weightDataItems[0].dbtodaysdaynumber-1].dbrunningavgdeficit*(weightDataItems[0].dbtodaysdaynumber-1))/weightDataItems[0].dbtodaysdaynumber
        }
        if(weightDataItems[0].dbtodaysdaynumber ===1){
          todayPredicted=weightDataItems[0].dbstartweight - weightDataItems[0].dbyesterdaydeficit/3500  
        }else{
        todayPredicted=weightDataItemsAll[weightDataItems[0].dbtodaysdaynumber-1].dbrunningpredictedweight - weightDataItems[0].dbyesterdaydeficit/3500
        }
        await weightData.findOneAndUpdate({ _id: req.params.id },
         {  dbrunningavgdeficit: yestAvgDef.toFixed(0), dbrunningpredictedweight: todayPredicted.toFixed(1)
         });
        console.log("daily data entry complete");
        res.redirect("/daily");  //takes them back to daily.ejs
        } catch (err) {
          console.log(err);
        }
      },

  // getUpdateAvg is not running and needs to be deleted
  getUpdateAvg : async (req, res) => {
    console.log(req.user)
    console.log('getUpdateAvg is running')
    try {
        const weightDataItems = await weightData.find({user:req.user.id})
        console.log(weightDataItems)

        res.render('updateavg.ejs', {weightData: weightDataItems, user: req.user})
        
    }catch(err){
        console.log(err)
    } 
},      
}