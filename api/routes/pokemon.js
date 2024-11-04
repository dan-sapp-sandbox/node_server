const express = require("express");
const { drizzle } = require("drizzle-orm/neon-http");
// const { lte, eq } = require("drizzle-orm");
const { PokemonTable } = require("../../drizzle/schema");
const { config } = require("dotenv");

config({ path: ".env" });
const router = express.Router();

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

router.get("/", (req, res) => {
  console.log("GET /pokemon");
  getDatabase()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
    });
});

module.exports = router;
