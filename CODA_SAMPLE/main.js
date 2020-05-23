var express=require('express');
var bodyParse=require('body-parser');
var mongoose=require('mongoose');
var cors=require('cors');
//set up express app
var app=express();

var routes=require('./route/api');

//parse data for post request
app.use(express.json());

app.use(cors());

//connect to mongoose
mongoose.connect('mongodb://localhost/mylogin',{useUnifiedTopology:true,useNewUrlParser:true});
mongoose.Promise=global.Promise;

//routing it to the module
app.use('/api',routes);

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send(err);
    console.log("Error while entering a new data. "+err);
});

app.listen(3000,function()
{
    console.log('Listening to port 3000');
});