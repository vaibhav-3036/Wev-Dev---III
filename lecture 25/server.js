const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Docotor = require('./docotos_model.js');
const port = 3000;


app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Docotor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/doctors/:id', async (req, res) => {
    try {
        const doctor = await Docotor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/doctors', async (req, res) => {
    const doctor = new Docotor({
        name: req.body.name,
        specialty: req.body.specialty,
        yearsOfExperience: req.body.yearsOfExperience,
        fees: req.body.fees,
        salary: req.body.salary,
        department: req.body.department
    });

    try {
        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/HospitalDB").then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Database")
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

