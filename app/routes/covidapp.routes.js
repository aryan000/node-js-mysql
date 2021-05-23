module.exports = app => {

    const patient = require("../controllers/patient.controller.js");
    const covidSymptoms = require("../controllers/covidSymptoms.controller.js");
    const comorbidities = require("../controllers/covidComorbidities.controller.js");
    const report = require("../controllers/reportValue.controller.js");

    // Register a new Patient
    app.post("/register", patient.create);

    // if a patient is Registered Patient
    app.post("/login", patient.login);

    // If the patient exist or not
    app.post("/doesPatientExist", patient.doesPatientExist);

    // Get Security questions for the particular patient
    app.get("/getSecurityQuestions/:user_id", patient.getSecurityQuestions);

    // Validate the security questions and answers for the particular patient.
    app.post("/validateSecurityQuestions", patient.validateSecurityQuestions);

    // Updates the password for the patient
    app.post("/updatePassword", patient.updatePassword);

    // Update the covidSymptoms for the patient
    app.post("/updateCovidSymptoms", covidSymptoms.updateCovidSymptoms);

    // Update the comorbidities for the patient
    app.post("/updateComorbidities", comorbidities.updateComorbidities);

    // Update the report values for the patient
    app.post("/updateReportValues", report.updateReportValues);

};