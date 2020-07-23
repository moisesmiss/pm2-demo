var express = require("express");
var app = express();
app.get("/api", (req, res) => {
  res.json({message: "hola mundo estoy usando pm2"});
});
app.listen(8081, ()=>{
  console.log("API listening on port 8081");
});