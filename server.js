const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
morgan = require('morgan');

const logger = require('./app/config/logger.js');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Adding swagger related config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(morgan('tiny'));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Covid Repo application. Refer: http://localhost:4000/api-docs/" });
});

// adding all routes
require("./app/routes/covidapp.routes.js")(app);

// set port, listen for requests
app.listen(4000, () => {
    logger.info("Server is running on port 4000.");
    logger.info("Refer to Swagger Documentation for API Details: http://localhost:4000/api-docs/")
});