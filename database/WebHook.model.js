const mongoose = require("mongoose");

const WebHook = mongoose.Schema({
    name:String,
    payload:Object,
    addebBy:String,
    MobileNumber:Number
},{
    timestamps:true
});

module.exports = mongoose.model("Webhook",WebHook);