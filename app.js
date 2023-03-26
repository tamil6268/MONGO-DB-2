const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const employeeRoutes=require('./Routes/employee')

app.use(bodyparser.json());
app.use(employeeRoutes)

app.listen(6000,()=>{
    console.log("server Started at the port at 6000")
})