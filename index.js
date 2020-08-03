var express = require("express");
var app = express();
var cors = require('cors')

const PORT = process.env.PORT || 5000;



const content = `<div> no payment made</div>`
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res, next) => {
  res.json('server is up man and CI is running');
});

app.get("/status", (req, res, next) => {
  res.json({ status: false, timeout: 5000, content: content });
});

app.get("/comment", (req, res, next) => {
  res.json({ status: false, timeout: 5000, content: content });
});