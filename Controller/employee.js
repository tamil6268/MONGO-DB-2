const mongoClient = require("../database/connection");

const employeeData = async (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);
  try {
    const result = await mongoClient.findInDB(queryParams);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const findEmployeeSalary = async (req, res) => {
  const query = { salary: { $gt: "30000" } };
  console.log(query);
  try {
    const result = await mongoClient.findEmployeeSalaryInDB(query);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const findEmployeeExperience = async (req, res) => {
  const query = { overallExp: { $gt: "2" } };
  console.log(query);
  try {
    const result = await mongoClient.findEmpExperienceInDB(query);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const findEmpGradExperience = async (req, res) => {
  const query = { yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } };
  console.log(query);
  try {
    const result = await mongoClient.findEmpGradwithExp(query);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const empSalaryUpdate = async (req, res) => {
  const updateData = req.body;
  // const filter = updateData.filter({salary : {$gt : "70000"}})
  // const value = {$set : updateData.value}
  const filter = updateData.filter;
  const value = { $set: updateData.value };
  console.log(filter);
  try {
    const result = await mongoClient.updateSalary(filter, value);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

const employeeDelete = async (req, res) => {
  const condition = { department: "Sales" };
  console.log(condition);
  try {
    const result = await mongoClient.deleteEmployee(condition);
    console.log("Result", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("something went wrong while performing db operations");
    return res
      .status(500)
      .send({ message: "something went wrong while performing db operations" });
  }
};

module.exports = {
  employeeData,
  findEmployeeSalary,
  findEmployeeExperience,
  findEmpGradExperience,
  empSalaryUpdate,
  employeeDelete,
};
