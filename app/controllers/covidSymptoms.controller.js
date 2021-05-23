const CovidSymptoms = require("../models/covidSymptoms.modal.js");
const logger = require('../config/logger.js');

// Create and Save a new Patient
exports.updateCovidSymptoms = (req, res) => {
    logger.info("Receiving request for updateCovidSymptoms");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const covidSymptoms = new CovidSymptoms({
        diarhea: req.body.diarhea,
        fever: req.body.fever,
        dry_cough: req.body.dry_cough,
        body_ache: req.body.body_ache,
        headache: req.body.headache,
        runny_nose: req.body.runny_nose,
        nausea: req.body.nausea,
        vomiting: req.body.vomiting,
        anosmia: req.body.anosmia,
        ageusia: req.body.ageusia,
        rashes: req.body.rashes,
        conjunctivitis: req.body.conjunctivitis,
        date: req.body.date || new Date(),
        user_id: req.body.user_id,
        sore_throat: req.body.sore_throat,
        covidseverity: req.body.covidseverity,
    });

    // Save Patient in the database
    CovidSymptoms.updateCovidSymptoms(covidSymptoms, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while updating symptoms for the Patient."
            });
        else res.send(data);
    });
};