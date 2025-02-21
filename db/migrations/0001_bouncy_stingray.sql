ALTER TABLE "profiles" ALTER COLUMN "stripe_customer_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ALTER COLUMN "stripe_subscription_id" DROP NOT NULL;