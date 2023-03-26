const {MongoClient} = require('mongodb')

const url = "mongodb+srv://ts7371797:Tamil123@shopping-app.hepxosx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url)

const findInDB = async() => {
    await client.connect()
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    const dbResponse = await collection.find().toArray()
    await client.close()
    return dbResponse
}

const findEmployeeSalaryInDB = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.find(data).toArray()
    await client.close()
    return dbResponse
}

const findEmpExperienceInDB = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.find(data).toArray()
    await client.close()
    return dbResponse
}

const findEmpGradwithExp = async (data) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.find(data).toArray()
    await client.close()
    return dbResponse
}

const updateSalary = async (filter, value) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.updateMany(filter, value)
    await client.close()
    return dbResponse
}

const deleteEmployee = async (filter) => {
    const database = client.db("Human_Resource")
    const collection = database.collection("employee")
    await client.connect()
    const dbResponse = await collection.deleteMany(filter)
    await client.close()
    return dbResponse
}

module.exports = {
    findInDB,
    findEmployeeSalaryInDB,
    findEmpExperienceInDB,
    findEmpGradwithExp,
    updateSalary,
    deleteEmployee 
}