const { integer, pgTable, text, timestamp, uuid, numeric } = require(
  "drizzle-orm/pg-core",
);

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() =>
  new Date()
);

const TriviaTable = pgTable("trivia-list", {
  id: uuid("id").primaryKey().defaultRandom(),
  prompt: text("prompt").notNull(),
  tag: text("tag"),
  image: text("image"),
  source: text("source"),
  low: numeric("low"),
  answer: numeric("answer"),
  high: numeric("high"),
  units: text("units"),
  difficulty: integer("difficulty"),
  createdAt,
  updatedAt,
});

module.exports = {
  TriviaTable,
};
