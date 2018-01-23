const express = require("express");
const db = require("./models");
const routes = require("./routes");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);


db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});