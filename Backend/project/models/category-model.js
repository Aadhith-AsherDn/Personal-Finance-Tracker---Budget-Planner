const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
   food:{
        type:Number,
        required:true
    },

    travel:{
         type:Number,
         required:true
    },

    shopping:{
         type:Number,
         required:true
    },
    bills:{
        type:Number,
        required:true
    },
    entertainment:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("category",categorySchema);