const Patient = require("../models/patient.modal.js");
const logger = require('../config/logger.js');

// Create and Save a new Patient
exports.create = (req, res) => {
    logger.info("Receiving request for registering patient");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a Patient
    const patient = new Patient({
        user_id : req.body.user_id,
        name : req.body.name,
        password : req.body.password,
        age : req.body.age,
        date_of_birth : req.body.date_of_birth,
        secQues1 : req.body.secQues1,
        secQues2 : req.body.secQues2,
        secQues3 : req.body.secQues3,
        secAns1 : req.body.secAns1,
        secAns2 : req.body.secAns2,
        secAns3 : req.body.secAns3
    });

    // Save Patient in the database
    Patient.create(patient, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Patient."
            });
        else res.send(data);
    });

};

// Authorizes login for a patient
exports.login = (req, res) => {
    logger.info("Validating request for login");

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Patient
    const patient = new Patient({
        user_id: req.body.user_id,
        password: req.body.password,
    });

    // Search for Patient  in the database
    Patient.isAuthenticatedPatient(patient, (err, data) => {

        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching the Patient."
            });
        else res.send(data);
    });
};

//Check if the patient with user_id exists
exports.doesPatientExist = (req, res) => {

    logger.info("Validating request if patient exist");

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Patient
    const patient = new Patient({
        user_id: req.body.user_id,
    });

    // Search for Patient  in the database
    Patient.doesPatientExist(patient.user_id, (err, data) => {

        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while searching the Patient."
            });
        else res.send(data);
    });

};

// GetSecurity Questions for the patiet
exports.getSecurityQuestions = (req, res) => {

    logger.info("Getting security Questions for user: "+ req.params.user_id);

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

exports.validateSecurityQuestions = (req, res) => {
    logger.info("Validating security Questions");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Patient
    const patient = new Patient({
        user_id: req.body.user_id,
        secQues1: req.body.secQues1,
        secAns1: req.body.secAns1,
        secQues2: req.body.secQues2,
        secAns2: req.body.secAns2,
        secQues3: req.body.secQues3,
        secAns3: req.body.secAns3
    });

    Patient.validateSecurityQuestions(patient, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Patient."
            });
        } else res.send(data);
    });
};

exports.updatePassword = (req, res) => {
    logger.info("Updating password");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Patient
    const patient = new Patient({
        user_id: req.body.user_id,
        password: req.body.password
    });

    Patient.updatePassword(patient, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Patient."
            });
        else res.send(data);
    });
};