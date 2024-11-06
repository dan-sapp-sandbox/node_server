const express = require("express");
const { drizzle } = require("drizzle-orm/neon-http");
// const { lte, eq } = require("drizzle-orm");
const { TriviaTable } = require("../../drizzle/schema");
const { config } = require("dotenv");
const mockData = require("./mockData");
const { v4: uuidv4 } = require("uuid");

config({ path: ".env" });
const router = express.Router();

const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);
const getDatabase = async () => {
  const data = await db.select().from(TriviaTable)
    .orderBy(TriviaTable.id)
    .execute();
  return data;
};
// const formatMockDataDates = (data) => {
//   return data.map(item => ({
//     ...item,
//     id: uuidv4(),
//     createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
//     updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date()
//   }));
// };

// const insertIntoDatabase = async () => {
//   const formattedMockData = await formatMockDataDates(mockData);
//   console.log("formattedMockData", formattedMockData)
//   try {
//     const insertPromises = formattedMockData?.map(newValues =>
//       db
//         .insert(TriviaTable)
//         .values(newValues)
//         .execute()
//     );
    
//     const results = await Promise.all(insertPromises);
//     console.log("Insert results:", results);
//   } catch (error) {
//     console.error("Error inserting into database:", error);
//   }
// };

router.get("/", async (req, res) => {
  getDatabase()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).send("Error fetching data");
    });
  // try {
  //   await insertIntoDatabase();
  //   res.status(200).send("Database inserted successfully");
  // } catch (err) {
  //   res.status(500).send(err);
  // }
});

module.exports = router;
