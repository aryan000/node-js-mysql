const sql = require("./db.js");
const logger = require('../config/logger.js');

// constructor
const Patient = function(patient) {
    if (patient.user_id !== undefined) { this.user_id = patient.user_id; }
    if (patient.username !== undefined) {
        this.username = patient.username;
        const user_name = this.username.split(" ")
        this.first_name = patient.first_name || user_name[0];
        this.last_name = patient.last_name || user_name[user_name.length - 1];
    };
    if (patient.password !== undefined) { this.password = patient.password; };
    if (patient.is_superuser !== undefined) { this.is_superuser = patient.is_superuser || 0; };
    if (patient.email !== undefined) { this.email = patient.email; };
    if (patient.is_staff !== undefined) { this.is_staff = patient.is_staff || 0; };
    if (patient.is_active !== undefined) { this.is_active = patient.is_active || 0; };
    if (patient.date_joined !== undefined) { this.date_joined = patient.date_joined || new Date(); };
    if (patient.user_id !== undefined) { this.user_id = patient.user_id; };
    if (patient.secQues1 !== undefined) { this.secQues1 = patient.secQues1; };
    if (patient.secAns1 !== undefined) { this.secAns1 = patient.secAns1; };
    if (patient.secQues2 !== undefined) { this.secQues2 = patient.secQues2; };
    if (patient.secAns2 !== undefined) { this.secAns2 = patient.secAns2; };
    if (patient.secQues3 !== undefined) { this.secQues3 = patient.secQues3; };
    if (patient.secAns3 !== undefined) { this.secAns3 = patient.secAns3; };
};

Patient.create = (patient, result) => {
    sql.query("INSERT INTO auth_user SET ?", patient, (err, res) => {
        if (err) {
            logger.error("error: ", err);
            result(err, null);
            return;
        }
        logger.info("User successfully registered with data ", { id: res.insertId, ...patient });
        result(null, { message: "User Successfully registered", userData: { id: res.insertId, ...patient } });
    });
};


Patient.isAuthenticatedPatient = (patient, result) => {
    sql.query(`SELECT * FROM auth_user WHERE user_id = ? and password = ?`, [patient.user_id, patient.password], (err, res) => {
        if (err) {
            logger.error("Error while authenticating patient", err);
            result(err, null);
            return;
        }

        if (res.length) {
            logger.info("Found patient: ", { id: res[0].id, user_id: res[0].user_id });
            result(null, { message: "Patient is authenticated", isUserAuthenticated: true, id: res[0].id });
            return;
        }

        // not found Patient with the id and password  
        logger.warn("Either Patient is not authenticated or user_Id does not exist")
        result(null, { message: "Patient is not authenticated/ User_ID does not exist", isUserAuthenticated: false });
    });
};


Patient.doesPatientExist = (user_id, result) => {
    sql.query(`SELECT * FROM auth_user WHERE user_id = ?`, user_id, (err, res) => {
        if (err) {
            logger.error("Error while checking patient", err);
            result(err, null);
            return;
        }

        if (res.length) {
            logger.info("Found patient: ", { id: res[0].id, user_id: res[0].user_id });
            result(null, { message: "Patient exists", doesPatientExist: true, id: res[0].id });
            return;
        }

        // not found Patient with the id and password  
        logger.warn("Patient does not exist")
        result(null, { message: "Patient does not exist", doesPatientExist: false });
    });
};

Patient.getSecurityQuestions = (user_id, result) => {
    sql.query(`SELECT id, secQues1, secQues2, secQues3 FROM auth_user WHERE user_id = ${user_id}`, (err, res) => {
        if (err) {
            logger.error("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            const response = {
                id: res[0].id,
                secQues1: res[0].secQues1,
                secQues2: res[0].secQues2,
                secQues3: res[0].secQues3
            }
            logger.info("Found Security Quesitions: ", response);
            result(null, { message: "Security questions found exists", ...response });
            return;
        }

        // not found Security question with the user_id
        logger.warn("Security Questions not found")
        result(null, { message: "Security questions not found", });
    });
};


Patient.validateSecurityQuestions = (patient, result) => {
    sql.query(`SELECT id, secQues1, secQues2, secQues3, secAns1, secAns2, secAns3 FROM auth_user WHERE user_id = ${patient.user_id}`, (err, res) => {
        if (err) {
            logger.error("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            const response = {}
            if (patient.secAns1 === res[0].secAns1 || patient.secAns2 === res[0].secAns2 ||
                patient.secAns3 === res[0].secAns3) {

                response.message = "Successfully matched";
                response.successFullMatch = true;
                logger.info("Security Questions successful matched for user_ID: ", patient.user_id);
                result(null, { message: "Security Questions successful matched for user_ID: " + patient.user_id, isSuccessfulMatch: true });
                return;
            }
        }
        logger.warn("Security Questions Not matched for user_ID: ", patient.user_id);
        result(null, { message: "Security Question doesnt match for user_ID: " + patient.user_id });
        return;
    });
};


Patient.updatePassword = (patient, result) => {
    sql.query(`UPDATE auth_user SET password = ? WHERE user_id = ?`,
        [patient.password, patient.user_id],
        (err, res) => {
            if (err) {
                logger.error("error: ", err);
                result(null, err);
                return;
            }
            
            if (res.affectedRows == 0) {
                logger.warn("Patient is not found for user_id:" + patient.user_id)
                result({ patient: "not_found" }, null);
                return;
            }

            logger.info("updated patient: ", { user_id: patient.user_id });
            result(null, { user_id: patient.user_id, "message": "Password successfully updated" });
        }
    );
};


module.exports = Patient;