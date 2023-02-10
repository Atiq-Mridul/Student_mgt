const StudentsModel=require('../model/StudentsModel')

//create

exports.CreateStudent=(req,res)=>{
let reqBody=req.body;
StudentsModel.create(reqBody,(err,data)=>{
    if(err){
        res.status(400).json({status:"fail",data:err})

    }
    else{
        res.status(200).json({status:"Success",data:data})
    }
})
}


//read

exports.ReadStudent=(req,res)=>{
    StudentsModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
    
        }
        else{
            res.status(200).json({status:"Success",data:data})
        }
    })
    }

    //read by ID

    exports.ReadStudentByID=(req,res)=>{
        let id= req.params.id;
        let Query={_id:id};
        StudentsModel.find(Query,(err,data)=>{
            if(err){
                res.status(400).json({status:"fail",data:err})
            }
            else{
                res.status(200).json({status:"success",data:data})
            }
        })
    }

//update

exports.UpdateStudent=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    let reqBody=req.body;
    StudentsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
 }

//delete

exports.DeleteStudent=(req,res)=>{
    let id=req.params.id;
    let Query={_id:id};
    StudentsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
    
        }
        else{
            res.status(200).json({status:"Success",data:data})
        }
    })
    }