var express=require('express');
var router=express.Router();
var model=require('../DB/databaseOp');
var modelJob=require('../DB/jobDetails')

router.get('/jobList',function(req,res,next){
   // res.send('get method invoked');
    console.log('Get method is invoked');
    modelJob.find({}).then(function(data)
    {
        console.log(data);
        res.send(data);
    });
    
});

//login auth
router.post('/login',function(req,res,next){
  
    var userN=req.body.username;
    var pass=req.body.password;
    //var type=req.body.type;
    console.log(userN+pass);

    model.findOne({username:userN,password:pass},function(err,user){
        if(err)
        {
            console.log(err);
            res.status(500).send();
        }
         if(user === null)
         {
             res.status(404).send();
             console.log('user not found');
         }

        else
        {
            console.log('logged in');
            console.log(user);
            //res.send('login success');
            res.send(user);
        }
    }); 

});


//list of jobs after auth
    router.post('/login/jobs',function(req,res,next){
    

    //Lists all the jobs
    modelJob.find({}).then(function(data)
    {
        console.log(data);
    });
      
    
});


router.put('/jobUpdate/:id',function(req,res,next){
    console.log('put method is invoked');
    modelJob.findByIdAndUpdate({_id:req.params.id},req.body).then(function(updatedData)
    {
        res.send(updatedData);
        console.log(updatedData);
    })


});

router.delete('/jobDelete/:id',function(req,res,next){
    console.log('Delete method is invoked');
    console.log(req.params.id);
    modelJob.findByIdAndDelete({_id:req.params.id}).then(function(deletedData)
    {
        res.send(deletedData);
        console.log("deleted ");
    })
});

module.exports=router;

//for inserting
// modelJob.create(req.body).then(function(data)
        // {
        //     console.log('job created');
        //     console.log(data);
        //     res.send('job created');

        // });

        // modelJob.find({}).then(function(data)
        // {
        //     console.log(data);
        // });
        