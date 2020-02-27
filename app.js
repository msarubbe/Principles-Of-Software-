
var express = require("express");
var bodyParser = require('body-parser');
var Chart = require('chart.js');


//START CHART.JS CODE





//END CHART.JS CODE
let hello_string = "t";
const app = express();
app.set( "view engine", "ejs" ); //needed for ejs file
// var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.get("/",function(request,response){
    var myChart = [12, 19, 3, 5, 2, 3]
    response.render("home",{myChart:myChart})
})
app.post("/",function(request,response){
    // var ctx = request.body.myChart
    // hello_string = 'hello'
    // console.log(ctx); 
    response.redirect("/home")
    // return hello_string
})


app.listen(3000,function(){
    console.log("server started in port 3000")
    
    // console.log(hello_string);
    
})
