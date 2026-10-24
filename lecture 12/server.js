const express = require('express');
const employeeRoutes = require("./routes/employeeRoutes")
const app = express();

app.use(express.json());
app.use("/employees", employeeRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});