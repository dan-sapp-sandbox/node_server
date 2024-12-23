const express = require("express");
const cors = require("cors");
const app = express();
const pokemon = require("./routes/pokemon")
const trivia = require("./routes/trivia")
const spotify = require("./routes/spotify")

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("GET /");
  res.send("Express on Vercel");
});

app.use("/pokemon", pokemon);
app.use("/trivia", trivia);
app.use("/spotify", spotify);

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;
