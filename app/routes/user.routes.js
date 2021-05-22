module.exports = app => {

    const user = require("../../app/controllers/user.controller.js")  
    const patient = require("../../app/controllers/patient.controller.js");

    // Register a new User
    app.post("/register", user.create);

    // if a user is Registered User
    app.post("/login", patient.login);
    
  };