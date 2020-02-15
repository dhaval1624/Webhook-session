const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("./database/connection");
const webHookModel = require("./database/WebHook.model");
const app = express();

MongoClient().then(() => {
    console.log("connected");
}).catch(console.log)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("welcome to hands on demo of WebHook");
})

app.get("/api/webhook",(req,res) => {
    webHookModel
    .find()
    .then((wh)=>{
        res.json({
            flag:true,
            data:wh,
            message: "SuccessFully Fetched"
        });
    })
    .catch(e => {
        res.json({
            flag:false,
            data:null,
            message: e.message
        });
    })
})

app.post("/api/webhook",(req,res)=>{
    let body = req.body;

    webHookModel
    .create(body)
    .then((wh)=>{
        res.json({
            flag:true,
            data:wh,
            message: "SuccessFully Created"
        })
    })
    .catch(e => {
        res.json({
            flag:false,
            data:null,
            message: e.message
        });
    })
})

app.put("/api/webhook/:id",(req,res)=>{
    let body = req.body;

    webHookModel
    .findByIdAndUpdate(req.params.id,body)
    .then((wh)=>{
        res.json({
            flag:true,
            data:wh,
            message: "SuccessFully Updated"
        })
    })
    .catch(e => {
        res.json({
            flag:false,
            data:null,
            message: e.message
        });
    })
})


app.delete("/api/webhook/:id",(req,res)=>{
    

    webHookModel
    .findByIdAndRemove(req.params.id,function(err,wh){
        if(err)
        {
            res.json({
                flag:false,
                data:null,
                message: e.message
            });         
        }
        else
        {
            res.json({
                flag:true,
                data:wh,
                message: "SuccessFully Deleted"
            })   
        }
    })
    
})
 app.listen(3000)
//.then(()=>{
//     console.log("Successfully Server Started ");
// })
