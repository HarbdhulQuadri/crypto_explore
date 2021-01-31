var express = require("express");
var app = express();
var request = require("request");
request({
url: "https://blockchain.info/stats?format=json",
json: true 
},function(error,response,body){
    price = body.market_price_usd
});
app.get("/",function(req,res){
    console.log("Single Handedly Handling Myself");
    res.send("Bitcoin Latest Price" + price);
});
app.listen(80,function(){
    console.log("Ose se Ye Mi nio");
});
