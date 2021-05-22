const ReportValue = require("../models/reportValue.modal.js");
const logger = require('../config/logger.js');

// Create and Save a new Patient
exports.updateReportValues = (req, res) => {
    logger.info("Receiving request for updateReportValues");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const reportValue = new ReportValue({
        id: req.body.id, 
        ferritin: req.body.ferritin || 0, 
        pct: req.body.pct || 0, 
        ddimer: req.body.ddimer || 0, 
        crp: req.body.crp || 0, 
        ldh: req.body.ldh || 0, 
        il6: req.body.il6 || 0, 
        lymphocyte: req.body.lymphocyte || 0, 
        neutrophil: req.body.neutrophil || 0, 
        lympho_neutro_ratio: req.body.lympho_neutro_ratio || 0, 
        bilirubin: req.body.bilirubin || 0, 
        temperature: req.body.temperature || 0, 
        oxygensat: req.body.oxygensat || 0, 
        blood_pressure: req.body.blood_pressure || 0, 
        date_added: req.body.date_added || new Date(), 
        date_report: req.body.date_report || new Date(), 
        user_id: req.body.user_id, 
        rtpcrCycleNumber: req.body.rtpcrCycleNumber
    });
  
    // Save Patient in the database
    ReportValue.updateReportValues(reportValue, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while updating symptoms for the Patient."
            });
        else res.send(data);
    });
};








