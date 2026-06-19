const express = require("express");
const dashboardrouter = express.Router();

const validateToken = require("../middlewares/athu-middleware.js");

const{allCategorySummary,
    categoryIncomeSummary,
    categoryExpenseSummary} =
     require("../controllers/category-controller.js");

dashboardrouter.get("/summary",validateToken,allCategorySummary);

dashboardrouter.get("/income",validateToken,categoryIncomeSummary);

dashboardrouter.get("/expenses",validateToken,categoryExpenseSummary);

module.exports = dashboardrouter;
