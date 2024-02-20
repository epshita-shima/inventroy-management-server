// userRole.route.js
const express = require("express");
const router = express.Router();
const userRoleController = require("./userrole.controller");

// router.get("/userroles", userRoleController.getAllUserRoles);
router.post("/", userRoleController.createUserRole);
router.get('/',userRoleController.getUserrole)
module.exports = router;


// const createUserRoll=require('./userroll.controller.js')
// const express = require("express");
// const router= express.Router()

// router.post("/create-userroll",createUserRoll)

//  module.exports = router