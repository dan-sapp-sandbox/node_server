const { integer, pgTable, text, timestamp, uuid } = require(
  "drizzle-orm/pg-core",
);

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() =>
  new Date()
);

const TriviaTable = pgTable("trivia-list", {
  id: uuid("id").primaryKey().defaultRandom(),
  prompt: text("prompt").notNull(),
  tag: text("tag").array(),
  image: text("image"),
  source: text("source"),
  low: integer("low").notNull(),
  answer: integer("answer").notNull(),
  high: integer("high").notNull(),
  units: text("units"),
  createdAt,
  updatedAt,
});

module.exports = {
  TriviaTable,
};
