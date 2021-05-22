const Patient = require("../models/patient.modal.js");

exports.login = (req, res) => {
    console.log("validating request");
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }      
    // Create a Patient
    const patient = new Patient({
      user_id :req.body.user_id,
      password : req.body.password,          
    });
      
    // Search for Patient  in the database
    Patient.isAuthenticatedPatient(patient, (err, data) => {
      
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while searching the Patient."
        });
      else res.send(data);
    });
        
  };