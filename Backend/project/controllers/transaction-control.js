const asyncHandler = require("express-async-handler");
const transactionModel = require("../models/transaction-model.js")


const newTransaction = asyncHandler(async(req,res)=>{
    const {title,amount,typeOf,category,date} = req.body;
    
    if(!title||!amount||!typeOf||!category){
        return res.status(400).json({msg:"Fill all details"});
    }

    if(money <= 0 ){
        return res.status(400).json({msg:"enter the correct amount"});
    }

    const lastTransaction = await transactionModel.findOne().sort({ transactionId: -1 });
    
    const nextTransactionId = lastTransaction? lastTransaction.transactionId + 1: 1;

      
    const currentTransaction = await transactionModel.create({
        userId: req.user.id,
        title,
        amount,
        typeOf,
        category,
        date,
        transactionId:nextTransactionId
    });

    return res.status(201).json({
    msg: "Transaction created successfully",
    transaction: currentTransaction
    });

});

const getAllTransactions = asyncHandler(async (req, res) => {

    const transactions = await transactionModel.find({
        userId: req.user.id
    });

    return res.status(200).json(transactions);
});

const getTransaction = asyncHandler(async (req,res) => {

    const transaction = await transactionModel.find({
        _id: req.params.id,
        userId: req.user.id
    })

    if(!transaction){
        return res.status(400).json({
            msg:"invalid data"
        });
    }

    return res.status(200).json(transaction);
});

const updateTransaction = asyncHandler(async (req,res) => {

    const transaction = await transactionModel.findOne({
        _id: req.params.id,
        userId: req.user.id
    });

    if(!transaction){
        return res.status(404).json({
            msg:"Transaction not found"
        });
    }

    const updatedTransaction = await transactionModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    return res.status(200).json({
        msg:"Transaction updated successfully",
        transaction: updatedTransaction
    });
});

const deleteTransaction = asyncHandler(async (req,res) => {

    const transaction = await transactionModel.findOne({
        _id: req.params.id,
        userId: req.user.id
    });

    if(!transaction){
        return res.status(404).json({
            msg:"Transaction not found"
        });
    }
    
    await transaction.deleteOne();

    return res.status(200).json({
        msg:"Transaction deleted successfully"
    });
});