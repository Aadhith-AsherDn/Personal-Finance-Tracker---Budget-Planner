const express = require("express");
const transactionrouter = express.Router();

const validateToken = require("../middlewares/athu-middleware.js");

const {
    newTransaction,
    getAllTransactions,
    getTransaction,
    updateTransaction,
    deleteTransaction
} = require("../controllers/transaction-control.js");

transactionrouter.get("/", validateToken, getAllTransactions);

transactionrouter.get("/:transactionId", validateToken, getTransaction);

transactionrouter.post("/", validateToken, newTransaction);

transactionrouter.put("/:transactionId", validateToken, updateTransaction);

transactionrouter.delete("/:transactionId", validateToken, deleteTransaction);

module.exports = transactionrouter;