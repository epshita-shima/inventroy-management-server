const express = require("express");
const router = express.Router();
const userController = require("./user.controller");

// router.get("/userroles", userRoleController.getAllUserRoles);
router.post("/", userController.createUser);
router.get('/',userController.getUser)
router.get('/:id',userController.getUserById)
router.put('/:id', userController.updateUser);
module.exports = router;
