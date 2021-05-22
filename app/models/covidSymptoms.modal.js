const sql = require("./db.js");

// constructor
const CovidSymptoms = function(covidSymptoms) {
  if(covidSymptoms.id !== undefined) {this.id = covidSymptoms.id;}
  if(covidSymptoms.sore_throat !== undefined) {this.sore_throat = covidSymptoms.sore_throat || 0;}
  if(covidSymptoms.diarhea !== undefined) {this.diarhea = covidSymptoms.diarhea || 0 ;}
  if(covidSymptoms.fever !== undefined) {this.fever = covidSymptoms.fever || 0;}
  if(covidSymptoms.dry_cough !== undefined) {this.dry_cough = covidSymptoms.dry_cough || 0;}
  if(covidSymptoms.body_ache !== undefined) {this.body_ache = covidSymptoms.body_ache || 0 ;}
  if(covidSymptoms.headache !== undefined) {this.headache = covidSymptoms.headache || 0 ;}
  if(covidSymptoms.runny_nose !== undefined) {this.runny_nose = covidSymptoms.runny_nose || 0 ;}
  if(covidSymptoms.nausea !== undefined) {this.nausea = covidSymptoms.nausea || 0 ;}
  if(covidSymptoms.vomiting !== undefined) {this.vomiting = covidSymptoms.vomiting || 0 ;}
  if(covidSymptoms.anosmia !== undefined) {this.anosmia = covidSymptoms.anosmia || 0 ;}
  if(covidSymptoms.ageusia !== undefined) {this.ageusia = covidSymptoms.ageusia || 0 ;}
  if(covidSymptoms.rashes !== undefined) {this.rashes = covidSymptoms.rashes || 0 ;}
  if(covidSymptoms.conjunctivitis !== undefined) {this.conjunctivitis = covidSymptoms.conjunctivitis || 0 ;}
  if(covidSymptoms.date !== undefined) {this.date = covidSymptoms.date || new Date();}
  if(covidSymptoms.user_id !== undefined) {this.user_id = covidSymptoms.user_id;}
  if(covidSymptoms.covidseverity !== undefined) {this.covidseverity = covidSymptoms.covidseverity || 0;}
};

CovidSymptoms.updateCovidSymptoms = (covidSymptoms, result) => {
  sql.query("INSERT INTO covidapp_symptoms SET ?", covidSymptoms, (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("Covid Symptoms successfully updated with data ", { id: res.insertId, ...covidSymptoms });
      result(null, { message: "Covid Symptoms successfully updated with data ", userData: { id: res.insertId, ...covidSymptoms } });
  });
};

module.exports = CovidSymptoms;