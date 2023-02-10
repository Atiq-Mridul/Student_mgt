const mongoose=require('mongoose');
const DataSchema=mongoose.Schema(
    {
    Name:{type:String},
    Roll:{type:String},
    Age:{type:String},
    Class:{type:String},
    Section:{type:String},
    Hobby:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
    },
    {versionKey:false}
);

const StudentsModel=mongoose.model('studentsDB',DataSchema);
module.exports=StudentsModel;