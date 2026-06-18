const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db-config");
const app =express();
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use("/user",require("./routes/login-routes.js"));

app.listen(port,()=>{
    console.log(`server running ${port}`);
})