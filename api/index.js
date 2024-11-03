const express = require("express");
const cors = require("cors");
const app = express();
const { drizzle } = require("drizzle-orm/neon-http");
const { PokemonTable } = require("../drizzle/schema");
const { lte } = require("drizzle-orm");
const { config } = require("dotenv");

config({ path: ".env" });
const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);
const getDatabase = async () => {
  const data = await db.select().from(PokemonTable)
    // .where(
    //   lte(PokemonTable.pokedexId, 151),
    // )
    .execute();
  console.log(data);
  return data;
};

getDatabase();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  console.log("GET /");
  res.send("Express on Vercel");
});
app.get("/pokemon/", (req, res) => {
  console.log("GET /pokemon");
  getDatabase().then((data) => res.send(JSON.stringify(data)));
});

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;
