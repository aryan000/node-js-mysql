module.exports = app => {

    const user = require("../../app//controllers/user.controller.js")  
    // Register a new User
    app.post("/register", user.create);
    
  };