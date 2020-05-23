var mongoose=require('mongoose');
var Schema=mongoose.Schema;


//moddel creation

var job=new Schema({
    title:{
            type:String,
            required:[true,'title is required'],  
    },
    company:{
        type: String,
        required:[true,'company is required'],
    },
    location:{
        type: String
    },
    desc:{
        type: String
    },
    jobID:{
            type:String,
            required:[true,'company is required'],
    }
});

var jobModel=mongoose.model('JobData',job);


module.exports=jobModel;