const mongoose=require('mongoose');

const TodoModel=mongoose.Schema({
    data:{
        type:String,
        // require:true
    }
},{timestamp:true});


const TodoSchema=mongoose.model('todo',TodoModel);
module.exports=TodoSchema;