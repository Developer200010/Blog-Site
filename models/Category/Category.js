const mongoose = require("mongoose")
// schema
const categorySchema = new mongoose.Schema({
    categoryName : {
        type:String,
        require: true
    },
    description:{
        type:String
    },
    posts:[
            {type:mongoose.Schema.Types.ObjectId,
            ref: 'Post'}
        ],
        author :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps:true,
    }
    )
// model

module.exports = mongoose.model('Category', categorySchema);