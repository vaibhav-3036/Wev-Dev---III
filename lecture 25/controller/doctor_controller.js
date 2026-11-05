const Docotor = require('../model/docotos_model.js');

const getDoctors = async (req, res) => {
    try {
        const doctors = await Docotor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getDoctorById = async (req, res) => {
    try {
        const doctor = await Docotor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
const addDoctor = async (req, res) => {
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
};

const updateDoctor = async (req, res) => {
    try {
        const updatedDoctor = await Docotor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(updatedDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const deleteDoctor = async (req, res) => {
    try {
        const deletedDoctor = await Docotor.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json({ message: 'Doctor deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getDoctors,
    getDoctorById,
    addDoctor,
    updateDoctor,
    deleteDoctor
};      
