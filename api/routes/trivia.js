const express = require("express");
const { drizzle } = require("drizzle-orm/neon-http");
const { eq } = require("drizzle-orm");
const { TriviaTable } = require("../../drizzle/schema");
const { config } = require("dotenv");
// const mockData = require("./mockData");
// const { v4: uuidv4 } = require("uuid");

config({ path: ".env" });
const router = express.Router();

const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);
const getAllPrompts = async () => {
  const data = await db.select().from(TriviaTable)
    .orderBy(TriviaTable.id)
    .execute();
  return data;
};
const getUniqueTags = async () => {
  const uniqueTags = await db
    .selectDistinct({ tag: TriviaTable.tag })
    .from(TriviaTable);
  return uniqueTags.map((row) => row.tag);
};

const getPromptsByTag = async (tag) => {
  const uniqueTags = await db
    .select()
    .from(TriviaTable)
    .where(eq(TriviaTable.tag, tag));

  return uniqueTags;
};

router.get("/", async (req, res) => {
  getAllPrompts()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).send("Error fetching data");
    });
});

router.get("/tags", async (req, res) => {
  getUniqueTags()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.status(500).send("Error fetching data");
    });
});

router.get("/tag/:tag", async (req, res) => {
  const { tag } = req.params;
  getPromptsByTag(tag)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).send("Error fetching data");
    });
});

module.exports = router;
