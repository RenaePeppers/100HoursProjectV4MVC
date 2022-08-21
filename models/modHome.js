const mongoose = require('mongoose');
const weightDataSchema = new mongoose.Schema({
dbusername: {
    type: String,
    required: true
},
dbstartweight: {
    type: String,
    required: true
},
dbstartdate: {
    type: Date,
    default: Date.now
},
dbgoaldeficit: {
    type: String,
    required: true
},
dbgoalweight: {
    type: String,
    required: true
},
dbtodaysdaynumber: {
    type: String,
    required: true
},
dbcurrentdate: {
    type: Date,
    default: Date.now
},
dbtodaysdaynumber: {
    type: String,
    required: true
},
dbtodaysdaynumber: {
    type: String,
    required: true
},
dbtodaysdaynumber: {
    type: String,
    required: true
},
})
module.exports = mongoose.model('WeightDataModel',weightDataSchema,'weightData');  

//we are exporting a model so that we can use it in other places.  We are giving it the name TodoTask/WeightDataModel. We are assigning the schema to the model.  the third parameter is the collection name.  We don't have to specify a collection.  It is optional.  If we didn't specify the collection name, it creates a new collection.  It would name it TodoTasks (plural of the model name)

//the schema is where you define with collection that you put these into.  the database is specified in the config file in the DB_CONNECTION