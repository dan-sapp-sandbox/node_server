CREATE TABLE IF NOT EXISTS "pokemon-list" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pokedexId" integer NOT NULL,
	"name" text NOT NULL,
	"spriteUrl" text NOT NULL,
	"imageBlob" text,
	"attack" integer NOT NULL,
	"defense" integer NOT NULL,
	"hp" integer NOT NULL,
	"specialAttack" integer NOT NULL,
	"specialDefense" integer NOT NULL,
	"speed" integer NOT NULL,
	"types" text[] NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trivia-list" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"prompt" text NOT NULL,
	"tag" text[],
	"image" text,
	"source" text,
	"low" integer NOT NULL,
	"answer" integer NOT NULL,
	"high" integer NOT NULL,
	"units" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
