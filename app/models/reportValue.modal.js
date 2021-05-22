const sql = require("./db.js");

// constructor
const ReportValue = function(reportValue) {
  if(reportValue.id !== undefined) { this.id = reportValue.id; }
  if(reportValue.ferritin !== undefined) { this.ferritin = reportValue.ferritin; }
  if(reportValue.pct !== undefined) { this.pct = reportValue.pct; }
  if(reportValue.ddimer !== undefined) { this.ddimer = reportValue.ddimer; }
  if(reportValue.crp !== undefined) { this.crp = reportValue.crp; }
  if(reportValue.ldh !== undefined) { this.ldh = reportValue.ldh; }
  if(reportValue.il6 !== undefined) { this.il6 = reportValue.il6; }
  if(reportValue.lymphocyte !== undefined) { this.lymphocyte = reportValue.lymphocyte; }
  if(reportValue.neutrophil !== undefined) { this.neutrophil = reportValue.neutrophil; }
  if(reportValue.lympho_neutro_ratio !== undefined) { this.lympho_neutro_ratio = reportValue.lympho_neutro_ratio; }
  if(reportValue.bilirubin !== undefined) { this.bilirubin = reportValue.bilirubin; }
  if(reportValue.temperature !== undefined) { this.temperature = reportValue.temperature; }
  if(reportValue.oxygensat !== undefined) { this.oxygensat = reportValue.oxygensat; }
  if(reportValue.blood_pressure !== undefined) { this.blood_pressure = reportValue.blood_pressure; }
  if(reportValue.date_added !== undefined) { this.date_added = reportValue.date_added; }
  if(reportValue.date_report !== undefined) { this.date_report = reportValue.date_report; }
  if(reportValue.user_id !== undefined) { this.user_id = reportValue.user_id; }
  if(reportValue.rtpcrCycleNumber !== undefined) { this.rtpcrCycleNumber = reportValue.rtpcrCycleNumber; }
  
};



module.exports = ReportValue;