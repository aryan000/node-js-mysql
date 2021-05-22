const Patient = require("../models/patient.modal.js");

// Create and Save a new Patient
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Patient
    const patient = new Patient({
        username: req.body.username,
        password: req.body.password,
        is_superuser: req.body.is_superuser,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        is_staff: req.body.is_staff,
        is_active: req.body.is_active,
        date_joined: req.body.date_joined,
        user_id: req.body.user_id,
        secQues1: req.body.secQues1,
        secAns1: req.body.secAns1,
        secQues2: req.body.secQues2,
        secAns2: req.body.secAns2,
        secQues3: req.body.secQues3,
        secAns3: req.body.secAns3
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
    console.log("Validating request");
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
    console.log("Validating request");
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
        if (err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Patient."
            });
        }
        else res.send(data);
    });
};

exports.updatePassword = (req, res) => {
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