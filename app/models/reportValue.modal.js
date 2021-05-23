const sql = require("./db.js");
const logger = require('../config/logger.js');

// constructor
const ReportValue = function(reportValue) {
    this.id = reportValue.id;
    this.ferritin = reportValue.ferritin;
    this.pct = reportValue.pct;
    this.ddimer = reportValue.ddimer;
    this.crp = reportValue.crp;
    this.ldh = reportValue.ldh;
    this.il6 = reportValue.il6;
    this.lymphocyte = reportValue.lymphocyte;
    this.neutrophil = reportValue.neutrophil;
    this.lympho_neutro_ratio = reportValue.lympho_neutro_ratio;
    this.bilirubin = reportValue.bilirubin;
    this.temperature = reportValue.temperature;
    this.oxygensat = reportValue.oxygensat;
    this.blood_pressure = reportValue.blood_pressure;
    this.date_added = reportValue.date_added;
    this.date_report = reportValue.date_report;
    this.user_id = reportValue.user_id;
    this.rtpcrCycleNumber = reportValue.rtpcrCycleNumber;

};

ReportValue.updateReportValues = (reportValue, result) => {
    sql.query("INSERT INTO covidapp_reportvalues SET ?", reportValue, (err, res) => {
        if (err) {
            logger.error("error: ", err);
            result(err, null);
            return;
        }
        logger.info("Covid reportvalues successfully updated with data ", { id: res.insertId, ...reportValue });
        result(null, { message: "Covid reportvalues successfully updated with data ", userData: { id: res.insertId, ...reportValue } });
    });
};


module.exports = ReportValue;