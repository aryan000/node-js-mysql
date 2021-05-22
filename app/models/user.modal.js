const sql = require("./db.js");

// constructor
const User = function(user) {
  
  this.username = user.username;
  this.password = user.password;
  this.is_superuser = user.is_superuser || 0;

  const user_name = this.username.split(" ")
  this.first_name = user.first_name || user_name[0]

  this.last_name = user.last_name || user_name[user_name.length-1]
  this.email = user.email;
  this.is_staff = user.is_staff || 0;
  this.is_active = user.is_active || 0;
  this.date_joined = user.date_joined || new Date();
  this.user_id = user.user_id; 
  this.secQues1 = user.secQues1;
  this.secAns1 = user.secAns1;
  this.secQues2 = user.secQues2;
  this.secAns2 = user.secAns2;
  this.secQues3 = user.secQues3;
  this.secAns3 = user.secAns3;
};

User.create = (user, result) => {  
  sql.query("INSERT INTO auth_user SET ?", user, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }    
    console.log("User successfully registered with data ",{id: res.insertId, ...user } );    
    result(null, { message: "User Successfully registered", userData: {id: res.insertId, ...user }});    
  });
};

module.exports = User;