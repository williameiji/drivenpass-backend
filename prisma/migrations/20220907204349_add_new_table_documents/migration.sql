-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "validate" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "emission" VARCHAR(255) NOT NULL,
    "dispatched" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,

    CONSTRAINT "documents_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
