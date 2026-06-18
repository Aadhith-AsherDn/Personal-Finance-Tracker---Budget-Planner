const mongoose = require("mongoose");


const budgetSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"login",
        required:true
    },
    month:{
        type:String,
        enum:{
            values:['jan','feb','mar','apr','may','june','july',
                'aug','sep','oct','nov','dec']
        },
        required:true
    },

   budget:{
    type:Number,
    required: true,
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("budget",budgetSchema);