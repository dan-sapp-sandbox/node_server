const express = require("express");
const { drizzle } = require("drizzle-orm/neon-http");
// const { lte, eq } = require("drizzle-orm");
const { TriviaTable } = require("../../drizzle/schema");
const { config } = require("dotenv");

config({ path: ".env" });
const router = express.Router();

const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);
const getDatabase = async () => {
  const data = await db.select().from(TriviaTable)
    .orderBy(TriviaTable.id)
    .execute();
  return data;
};

router.get("/", (req, res) => {
  getDatabase()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).send("Error fetching data");
    });
});

module.exports = router;
