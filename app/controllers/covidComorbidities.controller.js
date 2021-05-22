const Comorbidities = require("../models/comorbidities.modal.js");


exports.updateComorbidities = (req, res) => {
  
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const comorbidities = new Comorbidities({
        id : req.body.id,
        diabetes : req.body.diabetes || 0,
        copd : req.body.copd || 0 ,
        renal : req.body.renal || 0 ,
        pvd : req.body.pvd || 0,
        chf : req.body.chf || 0,
        dementia : req.body.dementia || 0,
        cancer : req.body.cancer || 0,
        stroke : req.body.stroke || 0,
        hepatic : req.body.hepatic || 0 ,
        heart : req.body.heart || 0 ,
        ulcer : req.body.ulcer || 0,
        paralysis : req.body.paralysis || 0 ,
        aids : req.body.aids || 0 ,
        arthritis : req.body.arthritis || 0,
        user_id : req.body.user_id,
        dateFirstSymptoms : req.body.dateFirstSymptoms || new Date(),
    });
  
    // Save Patient in the database
    Comorbidities.updateComorbidities(comorbidities, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while updating symptoms for the Patient."
            });
        else res.send(data);
    });
};






