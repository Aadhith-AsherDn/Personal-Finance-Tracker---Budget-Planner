const asyncHandler = require("express-async-handler");
const budget = require("../models/Budget-model.js");

const setbudget = asyncHandler(async (req,res)=>{
    const {
        month,
        budget,
    } = req.body;
    
    if(!month || !budget){
       return res.status(400).json({
            msg:"please enter the month and bubget"
        })
    }
    if(budget <= 0 ){
        return res.status(400).json({
            msg:"please enter the correct bubget"
        })
    }

    const newBudget = await budget.create({
        userId:req.userid,
        budget,
        month
    });

    return res.status(200).json(newBudget);
});

const modbudget = asyncHandler(async (req,res)=>{
   const updateMonth = await budget.findOne({
    userId: req.user.id,
    month: req.params.month
    });

    if(!updateMonth){
        return res.status(400).json({msg:"you didn't created budget for this month"});
    }
    
    const newBudget = await budget.findOneAndUpdate(
    updateMonth,
    req.body,
    );

    return res.status(200).json({
        msg:"budget updated successfully",
        budget: updatedbudget
    });
     
});

const deleteBudget = asyncHandler(async (req,res)=>{
    const delMonth = await budget.findOne({
    userId: req.user.id,
    month: req.params.month
    });

    if(!delMonth){
        return res.status(404).json({msg:"you didn't created budget for this month"});
    }

    await delMonth.deleteOne();
    return res.status(200).json({
        msg:" Budget deleted successfully"
    });
});

const getBudget = asyncHandler(async (req,res)=>{

    const budgets = await budget.find({
        userId: req.user.id
    });

    return res.status(200).json(budgets);
});