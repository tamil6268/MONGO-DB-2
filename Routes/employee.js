const express = require('express')
const employeeController = require('../Controller/employee')

const router = express.Router()

router.get("/employee", employeeController.employeeData)
router.get("/employeeSalary", employeeController.findEmployeeSalary)
router.get("/employeeExperience", employeeController.findEmployeeExperience)
router.get("/empGradExperience", employeeController.findEmpGradExperience)
router.put("/empSalaryUpdate", employeeController.empSalaryUpdate)
router.delete("/employeeDelete", employeeController.employeeDelete)


module.exports = router