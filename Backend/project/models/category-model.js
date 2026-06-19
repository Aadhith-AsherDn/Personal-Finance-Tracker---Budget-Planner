/* const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"login",
    required:true
    },
   food:{
        type:Number,
        default:0
    },

    travel:{
         type:Number,
         default:0
    },

    shopping:{
         type:Number,
         default:0
    },
    bills:{
        type:Number,
        default:0
    },
    entertainment:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("category",categorySchema); *\