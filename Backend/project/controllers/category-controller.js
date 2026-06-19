const asyncHandler = require("express-async-handler");
const transactionModel = require("../models/transaction-model.js");
const mongoose = require("mongoose");

const allCategorySummary = asyncHandler(async (req, res) => {

    const summary = await transactionModel.aggregate([
        {
            $match: {
                userId: new mongoose.Types.ObjectId(req.user.id)
            }
        },
        {
            $group: {
                _id: {
                    category: "$category",
                    type: "$typeOf"
                },
                totalAmount: {
                    $sum: "$amount"
                }
            }
        }
    ]);

    return res.status(200).json(summary);
});

const categoryExpenseSummary = asyncHandler(async (req, res) => {

    const ExpenseSummary = await transactionModel.aggregate([
        {
            $match: {
                userId: new mongoose.Types.ObjectId(req.user.id),
                typeOf: "expense"
            }
        },
        {
            $group: {
                _id: "$category",
                totalSpent: {
                    $sum: "$amount"
                }
            }
        }
    ]);

    return res.status(200).json(ExpenseSummary);
});

const categoryIncomeSummary = asyncHandler(async (req, res) => {

    const incomeSummary = await transactionModel.aggregate([
        {
            $match: {
                userId: new mongoose.Types.ObjectId(req.user.id),
                typeOf: "income"
            }
        },
        {
            $group: {
                _id: "$category",
                totalIncome: {
                    $sum: "$amount"
                }
            }
        }
    ]);

    return res.status(200).json(incomeSummary);
});

module.exports = {allCategorySummary,categoryIncomeSummary,categoryExpenseSummary};