const sql = require("./db.js");
const logger = require('../config/logger.js');

// constructor
const Comorbidities = function(comorbidities) {
    this.id = comorbidities.id; 
    this.diabetes = comorbidities.diabetes; 
    this.copd = comorbidities.copd; 
    this.renal = comorbidities.renal; 
    this.pvd = comorbidities.pvd; 
    this.chf = comorbidities.chf; 
    this.dementia = comorbidities.dementia; 
    this.cancer = comorbidities.cancer; 
    this.stroke = comorbidities.stroke; 
    this.hepatic = comorbidities.hepatic; 
    this.heart = comorbidities.heart; 
    this.ulcer = comorbidities.ulcer; 
    this.paralysis = comorbidities.paralysis; 
    this.aids = comorbidities.aids; 
    this.arthritis = comorbidities.arthritis; 
    this.user_id = comorbidities.user_id; 
    this.dateFirstSymptoms = comorbidities.dateFirstSymptoms; 

};

Comorbidities.updateComorbidities = (comorbidities, result) => {
    sql.query("INSERT INTO covidapp_comorbidity SET ?", comorbidities, (err, res) => {
        if (err) {
            logger.error("error: ", err);
            result(err, null);
            return;
        }
        logger.info("Covid comorbidities successfully updated with data ", { id: res.insertId, ...comorbidities });
        result(null, { message: "Covid comorbidities successfully updated with data ", userData: { id: res.insertId, ...comorbidities } });
    });
};

module.exports = Comorbidities;