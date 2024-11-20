CREATE TABLE IF NOT EXISTS "stat-trivia-list" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"question" text,
	"category" text,
	"image" text,
	"graph" text,
	"low" numeric,
	"answer" numeric,
	"high" numeric,
	"units" text,
	"questionType" text,
	"difficulty" integer,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
