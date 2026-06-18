const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required: true
    },
    amount:{type:Number,
        required: true
    },
    typeOf:{
            type:String,
            required: true,
             enum:{
            values:['income','expense'],
             message: '{VALUE} is not a valid type. Choose either "income" or "expense".'
        }
    },
    category:{
        type:String,
        required: true,
        lowercase:true, 
        enum:{
            values:['food','travel','shopping','bills','entertainment'],
             message: '{VALUE} is not a valid type.'
        }
    },
    date:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("transaction",transactionSchema);