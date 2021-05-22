const Patient = require("../models/patient.modal.js");

exports.login = (req, res) => {
    console.log("Validating request");
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

exports.doesPatientExist = (req, res) => {
  console.log("Validating request");
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }      
  // Create a Patient
  const patient = new Patient({
    user_id :req.body.user_id,    
  });
    
  // Search for Patient  in the database
  Patient.doesPatientExist(patient.user_id, (err, data) => {
    
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while searching the Patient."
      });
    else res.send(data);
  });

};

exports.getSecurityQuestions = (req, res) => {
  Patient.getSecurityQuestions(req.params.user_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Patient with id ${req.params.user_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Patient with id " + req.params.user_id
        });
      }
    } else res.send(data);
  });
};