const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Adding swagger related config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Covid Repo application." });
});

// adding all routes
require("./app/routes/covidapp.routes.js")(app);

// set port, listen for requests
app.listen(4000, () => {
  console.log("Server is running on port 4000.");
});