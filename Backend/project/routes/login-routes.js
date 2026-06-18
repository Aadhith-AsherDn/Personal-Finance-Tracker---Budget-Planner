const express = require("express");
const router = express.Router();

const validateToken = require("../middlewares/athu-middleware.js");

const {register,userLogin,profile} = require("../controllers/user-control.js");



router.post("/register",register);
router.post("/login",userLogin);
router.get("/profile",validateToken,profile);

module.exports  = router;