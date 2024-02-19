// userRole.route.js
const express = require("express");
const router = express.Router();
const userRoleController = require("./userroll.controller");

router.post("/create-userrole", userRoleController.createUserRole);
router.get("/userroles", userRoleController.getAllUserRoles);

module.exports = router;


// const createUserRoll=require('./userroll.controller.js')
// const express = require("express");
// const router= express.Router()

// router.post("/create-userroll",createUserRoll)

//  module.exports = router