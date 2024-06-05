// userRole.route.js
const express = require("express");
const router = express.Router();
const userRoleController = require("./userrole.controller");

router.post("/", userRoleController.createUserRole);
router.get('/',userRoleController.getUserrole)

module.exports = router;

