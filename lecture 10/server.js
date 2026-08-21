const express = require('express');
const app = express();

app.use(express.json());

const employees = [
    { empId: 1, name: "Rihan", salary: 10000, department: "IT" },
    { empId: 2, name: "Shardha", salary: 12000, department: "HR" },
    { empId: 3, name: "Amit", salary: 15000, department: "IT" },
    { empId: 4, name: "vaibha", salary: 20000, department: "Finance" },
    { empId: 5, name: "Rudra", salary: 25000, department: "IT" }
]

app.get("/employees", (req, res) => {
    res.json({ success: true, employees });
});

app.get("/employees/:id", (req, res) => {
    const id = req.params.id
    const employee = employees.find((employee) => employee.empId === Number(id));
    if (!employee) {
        res.status(404).json({success: false, message: "Employee not found" });
    } else {
        res.json({ success: true, employee });
    }
});

app.post("/employees", (req, res) => {
    const employee = req.body;
    employees.push(employee);
    res.json({ success: true, employee });
});

app.put("/employees/:id", (req, res) => {
    const id = req.params.id;
    const employee = req.body;
    const employeeIndex = employees.findIndex((employee) => employee.empId === Number(id));
    if (!result) {
        res.status(404).json({success: false, message: "Employee not found" });
    }
    result.name = employee.name;
    result.salary = employee.salary;
    result.department = employee.department;
    res.json({ success: true, employee});
});

app.delete("/employees/:id", (req, res) => {
    const id = req.params.id;
    const employeeIndex = employees.findIndex((employee) => employee.empId === Number(id));
    if(!result) {
        res.status(404).json({succcess: false, message: "Employee not  found"});
    }
    emplyees.splice(id-1, 1);
    res.json({ success: true, result: employees[id-1] });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});