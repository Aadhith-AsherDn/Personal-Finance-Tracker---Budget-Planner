const express = require("express");
const budgetrouter = express.Router();

const validateToken = require("../middlewares/athu-middleware.js");

const {
    setbudget,
    modbudget,
    deleteBudget,
    getBudget
} = require("../controllers/budget-controller.js");


budgetrouter.get("/", validateToken, getBudget);

budgetrouter.post("/", validateToken, setbudget);

budgetrouter.put("/:month", validateToken, modbudget);

budgetrouter.delete("/:month", validateToken, deleteBudget);

module.exports = budgetrouter;