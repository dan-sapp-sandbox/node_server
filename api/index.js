const express = require("express");
const cors = require("cors");
const app = express();
const mockData = require("./testData");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  console.log("GET /");
  res.send("Express on Vercel")
});
app.get("/pokemon/", (req, res) => {
  console.log("GET /pokemon");
  res.send(JSON.stringify(mockData))
});

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;