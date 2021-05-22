const sql = require("./db.js");

// constructor
const Patient = function(patient) {
  
  this.user_id = patient.user_id;
  this.password = patient.password;  
};

Patient.isAuthenticatedPatient = (patient, result) => {
    sql.query(`SELECT * FROM auth_user WHERE user_id = ? and password = ?`,[patient.user_id,patient.password], (err, res) => {
      if (err) {
        console.log("Error while authenticating patient", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found patient: ", {id: res[0].id, user_id: res[0].user_id});
        result(null, { message: "Patient is authenticated", isUserAuthenticated: true, id: res[0].id});            
        return;
      }
  
      // not found Patient with the id and password  
      console.log("Either Patient is not authenticated or user_Id does not exist")    
      result(null, { message: "Patient is not authenticated/ User_ID does not exist", isUserAuthenticated: false});    
    });
  };
  

  Patient.doesPatientExist = (user_id, result) => {
    sql.query(`SELECT * FROM auth_user WHERE user_id = ?`,user_id, (err, res) => {
      if (err) {
        console.log("Error while checking patient", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Found patient: ", {id: res[0].id, user_id: res[0].user_id});
        result(null, { message: "Patient exists", doesPatientExist: true, id: res[0].id});            
        return;
      }
  
      // not found Patient with the id and password  
      console.log("Patient does not exist")    
      result(null, { message: "Patient does not exist", doesPatientExist: false});    
    });
  };
  

module.exports = Patient;