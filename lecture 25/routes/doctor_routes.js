const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, addDoctor, updateDoctor, deleteDoctor } = require('../controller/doctor_controller.js');

router.get('/doctors', getDoctors);

router.get('/doctors/:id', getDoctorById);

router.post('/doctors', addDoctor);

router.put('/doctors/:id', updateDoctor);

router.delete('/doctors/:id', deleteDoctor);

module.exports = router;