var http = require("http");
var request = require("request");

http.createServer(function(req,res){
//requesting a new visitor
request({
url: "https://blockchain.info/stats?format=json",
json: true 
},function(error,response,body){
    console.log(console.market_price_usd);
});
console.log("Hi I learn Very Fast" + req.url);
res.end("bitcoin to the moon");
}).listen(80);
