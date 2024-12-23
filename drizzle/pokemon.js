const { integer, pgTable, text, timestamp, uuid } = require(
  "drizzle-orm/pg-core",
);

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() =>
  new Date()
);

const PokemonTable = pgTable("pokemon-list", {
  id: uuid("id").primaryKey().defaultRandom(),
  pokedexId: integer("pokedexId").notNull(),
  name: text("name").notNull(),
  spriteUrl: text("spriteUrl").notNull(),
  imageBlob: text("imageBlob"),
  attack: integer("attack").notNull(),
  defense: integer("defense").notNull(),
  hp: integer("hp").notNull(),
  specialAttack: integer("specialAttack").notNull(),
  specialDefense: integer("specialDefense").notNull(),
  speed: integer("speed").notNull(),
  types: text("types").array().notNull(),
  createdAt,
  updatedAt,
});

module.exports = {
  PokemonTable
};