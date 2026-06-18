const budget = require("../models/Budget-model");
const asyncHandler = require("express-async-handler");
const dataModel = require("../models/data-model");
const categoryModel = require("../models/category-model");






const newTransaction = asyncHandler(async(req,res)=>{
    const {title,amount,type,category} = req.body;
    if(!title||!amount||!type||!category){
        return res.status(400).json({msg:"Fill all details"})
    }
    const newTrans = await dataModel.create({
        title,amount,type,category});
    
    const newMoney = categoryModel.find({category})+ money;
    

});