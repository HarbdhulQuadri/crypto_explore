var express = require("express");
var app = express();
var request = require("request");
request({

url: "https://blockchain.info/rawaddr/1AmEJ8gZyx2TxcSHPEbLWG8onzRvp2Qn7M?format=json",
json: true 
},function(error,response,body){
    balance = body.final_balance;
    totalRecieved = body.total_received;
    totalSent = body.total_sent;
    totalSent = body.total_sent;
});
//app.get("/index",function(req,res){
 //   res.sendFile(__dirname +"/index.html");
//});

app.get("/",function(req,res){
    res.send("Address Balance " + total_received);
});
app.get("overview",function(req,res){

})
//server is listening
app.listen(80,function(){
    console.log("Ose se Ye Mi nio");
});
