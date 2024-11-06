ALTER TABLE "trivia-list" ALTER COLUMN "tag" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "trivia-list" ALTER COLUMN "low" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "trivia-list" ALTER COLUMN "low" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "trivia-list" ALTER COLUMN "answer" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "trivia-list" ALTER COLUMN "answer" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "trivia-list" ALTER COLUMN "high" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "trivia-list" ALTER COLUMN "high" DROP NOT NULL;