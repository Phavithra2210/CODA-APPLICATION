var mongoose=require('mongoose');
var Schema=mongoose.Schema;


//moddel creation

var loginSchema=new Schema({
    username:{
            type:String,
            required:[true,'password is required'],  
    },
    password:{
        type: String,
        required:[true,'password is required'],
    }
});

var model=mongoose.model('LoginData',loginSchema);


module.exports=model;