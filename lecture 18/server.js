const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/age-check/:age', (req, res, next) => {
    let age = parseInt(req.params.age);
    // for change of logic error
    try{
        if (age >= 18) {
            throw new Error("You are eligible to vote");
        } else {
            res.send("You are not eligible to vote");
        }
    } catch (error) {
        next(error);
        
    }
});

// for unexpected error called error middleware

app.use((err, req, res, next) => {
    res.status(500).json({Success: false, message: "An error occurred"});
});

// for expected route error
// always wrriten at the end of the routes

app.use((req, res) => {
    res.status(404).json({Success: false, message: "Route not found"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});\