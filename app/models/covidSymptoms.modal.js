const sql = require("./db.js");
const logger = require('../config/logger.js');

// constructor
const CovidSymptoms = function(covidSymptoms) {
    this.id = covidSymptoms.id;
    this.sore_throat = covidSymptoms.sore_throat;
    this.diarhea = covidSymptoms.diarhea;
    this.fever = covidSymptoms.fever;
    this.dry_cough = covidSymptoms.dry_cough;
    this.body_ache = covidSymptoms.body_ache;
    this.headache = covidSymptoms.headache;
    this.runny_nose = covidSymptoms.runny_nose;
    this.nausea = covidSymptoms.nausea;
    this.vomiting = covidSymptoms.vomiting;
    this.anosmia = covidSymptoms.anosmia;
    this.ageusia = covidSymptoms.ageusia;
    this.rashes = covidSymptoms.rashes;
    this.conjunctivitis = covidSymptoms.conjunctivitis;
    this.date = covidSymptoms.date;
    this.user_id = covidSymptoms.user_id;
    this.covidseverity = covidSymptoms.covidseverity;
};

CovidSymptoms.updateCovidSymptoms = (covidSymptoms, result) => {
    sql.query("INSERT INTO covidapp_symptoms SET ?", covidSymptoms, (err, res) => {
        if (err) {
            logger.error("error: ", err);
            result(err, null);
            return;
        }
        logger.info("Covid Symptoms successfully updated with data ", { id: res.insertId, ...covidSymptoms });
        result(null, { message: "Covid Symptoms successfully updated with data ", userData: { id: res.insertId, ...covidSymptoms } });
    });
};

module.exports = CovidSymptoms;