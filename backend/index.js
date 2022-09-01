require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { getUserLogs } = require('./queries');

const PORT = process.env.PORT || 8888;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', getUserLogs)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})