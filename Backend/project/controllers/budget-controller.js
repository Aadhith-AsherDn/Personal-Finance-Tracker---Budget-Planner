const asyncHandler = require("express-async-handler");
const budgetmodel = require("../models/Budget-model.js");

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

    const newBudget = await budgetmodel.create({
        userId:req.user.id,
        budget,
        month
    });

    return res.status(200).json(newBudget);
});


const modbudget = asyncHandler(async (req, res) => {

    const updatedBudget = await budgetmodel.findOneAndUpdate(
        {
            userId: req.user.id,
            month: req.params.month
        },
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!updatedBudget) {
        return res.status(404).json({
            msg: "Budget not found for this month"
        });
    }

    return res.status(200).json({
        msg: "Budget updated successfully",
        budget: updatedBudget
    });
});


const deleteBudget = asyncHandler(async (req,res)=>{
    const delMonth = await budgetmodel.findOne({
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

    const budgets = await budgetmodel.find({
        userId: req.user.id
    });

    return res.status(200).json(budgets);
});

module.exports = {
    setbudget,
    modbudget,
    deleteBudget,
    getBudget
};