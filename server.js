const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

// Parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("Server running on port " + port));
