const sql = require("./db.js");
const logger = require('../config/logger.js');

// constructor
const Comorbidities = function(comorbidities) {
    if(comorbidities.id !== undefined) { this.id = comorbidities.id; }
    if(comorbidities.diabetes !== undefined) { this.diabetes = comorbidities.diabetes; }
    if(comorbidities.copd !== undefined) { this.copd = comorbidities.copd; }
    if(comorbidities.renal !== undefined) { this.renal = comorbidities.renal; }
    if(comorbidities.pvd !== undefined) { this.pvd = comorbidities.pvd; }
    if(comorbidities.chf !== undefined) { this.chf = comorbidities.chf; }
    if(comorbidities.dementia !== undefined) { this.dementia = comorbidities.dementia; }
    if(comorbidities.cancer !== undefined) { this.cancer = comorbidities.cancer; }
    if(comorbidities.stroke !== undefined) { this.stroke = comorbidities.stroke; }
    if(comorbidities.hepatic !== undefined) { this.hepatic = comorbidities.hepatic; }
    if(comorbidities.heart !== undefined) { this.heart = comorbidities.heart; }
    if(comorbidities.ulcer !== undefined) { this.ulcer = comorbidities.ulcer; }
    if(comorbidities.paralysis !== undefined) { this.paralysis = comorbidities.paralysis; }
    if(comorbidities.aids !== undefined) { this.aids = comorbidities.aids; }
    if(comorbidities.arthritis !== undefined) { this.arthritis = comorbidities.arthritis; }
    if(comorbidities.user_id !== undefined) { this.user_id = comorbidities.user_id; }
    if(comorbidities.dateFirstSymptoms !== undefined) { this.dateFirstSymptoms = comorbidities.dateFirstSymptoms; }   
  
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