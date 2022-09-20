const mongoose = require('mongoose');

const weightDataSchema = new mongoose.Schema({
username: {
    type: String,
    required: false
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

dbstartweight: {
    type: Number,
    required: false
},
dbstartdate: {
    type: Date,
    default: Date.now
},
dbgoaldeficit: {
    type: Number,
    required: false
},
dbgoalweight: {
    type: Number,
    required: false
},
dbdailygoalweight: {
    type:Number,
    required:false
},
dbtodaysdaynumber: {
    type: Number,
    required: false
},
dbtodaysdate: {
    type: Date,
    default: Date.now
},
dbyesterdaydeficit: {
    type: Number,
    required: false
},
dbyesterdaycalin: {
    type: Number,
    required: false
},
dbyesterdaycalout: {
    type: Number,
    required: false
},
dbtodaysweight: {
    type: Number,
    required: false
},
dbrunningavgdeficit: {
    type: Number,
    required: false
},
dbrunningpredictedweight: {
    type: Number,
    required: false
}
})
module.exports = mongoose.model('WeightDataModel',weightDataSchema,'weightData');  

//we are exporting a model so that we can use it in other places.  We are giving it the name WeightDataModel. We are assigning the schema to the model.  the third parameter is the collection name.  We don't have to specify a collection.  It is optional.  If we didn't specify the collection name, it creates a new collection.  It would name it WeightDataModels (plural of the model name)

//the schema is where you define with collection that you put these into.  the database is specified in the config file in the DB_CONNECTION