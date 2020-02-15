const mongoose = require("mongoose");
const URL = "mongodb://webhook:webhook@139.59.5.96:27017/webhook"

mongoose.Promise = global.Promise;

module.exports = () => {
    return mongoose.connect(URL,{
        useNewUrlParser:true
    }).then(()=>{
        console.log("Database Connection Instablished");
    }).catch(err => {
        console.log("Database Connection Error" , err);
        process.exit();
    });
}