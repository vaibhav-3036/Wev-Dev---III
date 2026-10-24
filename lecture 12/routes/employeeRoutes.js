const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require("../Controller/empolyeeController")


router.get("/", getEmployees);

// Read Operation

router.get("/:id", getEmployeeById);

router.post("/", addEmployee);

router.put("/:id", updateEmployee);

router.patch("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;