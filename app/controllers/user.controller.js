const User = require("../models/user.modal.js");


// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }      
    // Create a Customer
    const user = new User({
      username : req.body.username,
      password : req.body.password,
      is_superuser :req.body.is_superuser,
      first_name :req.body.first_name,
      last_name :req.body.last_name,
      email :req.body.email,
      is_staff :req.body.is_staff,
      is_active :req.body.is_active,
      date_joined :req.body.date_joined,
      user_id :req.body.user_id,
      secQues1 :req.body.secQues1,
      secAns1 :req.body.secAns1,
      secQues2 :req.body.secQues2,
      secAns2 :req.body.secAns2,
      secQues3 :req.body.secQues3,
      secAns3 :req.body.secAns3      
    });
  
    // Save Customer in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };