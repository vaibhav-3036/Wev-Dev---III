use("HospitalDB")

db.doctors.insertMany([
    {
        name: "Dr. Samuel",
        specialty: "Ophthalmologist",
        yearsOfExperience: 10,
        fees: 200,
        salary: 150000,
        department: "Ophthalmology",
    },
    {
        name: "Dr. Modi",
        specialty: "Neurologist",
        yearsOfExperience: 15,
        fees: 250,
        salary: 180000,
        department: "Neurology",
    },
    {
        name: "Dr. Ashok",
        specialty: "Orthopedic Surgeon",
        yearsOfExperience: 12,
        fees: 300,
        salary: 200000,
        department: "Orthopedics",
    },
    {
        name: "Dr. Mahesh",
        specialty: "Pediatrician",
        yearsOfExperience: 8,
        fees: 150,
        salary: 120000,
        department: "Pediatrics",
    },
    {
        name: "Dr. Rakesh",
        specialty: "Cardiologist",
        yearsOfExperience: 10,
        fees: 200,
        salary: 150000,
        department: "Cardiology",
    },
    {
        name: "Dr. Abhijeet",
        specialty: "Dermatologist",
        yearsOfExperience: 15,
        fees: 250,
        salary: 180000,
        department: "Dermatology",
    },
    {
        name: "Dr. Smith",
        specialty: "ENT Specialist",
        yearsOfExperience: 12,
        fees: 300,
        salary: 200000,
        department: "ENT",
    }
])

db.doctors.aggregate([
    {
        $match: {
          department:"Cardiology"
        }
    },
    {
        $project: {
            name: 1,
            specialty: 1,
            fees: 1,
            _id: 0
        }   
    },
    {
        $group: {
            _id: "$yearsOfExperience",
            totalDoctors: { $sum: 1 },
            averageFees: { $avg: "$fees" }

        }
    },
    {
        $sort: { averageFees: -1 }
    },
    // {
    //     $limit: 1
    // },
    {
        $count: 'totalDoctors'
    }

])