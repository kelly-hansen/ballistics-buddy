CREATE SCHEMA IF NOT EXISTS "public";

CREATE TABLE "calibers" (
        "caliberId" serial NOT NULL,
        "caliber" TEXT NOT NULL,
        CONSTRAINT "calibers_pk" PRIMARY KEY ("caliberId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "ballisticsData" (
        "dataPointId" serial NOT NULL,
        "caliberId" int NOT NULL,
        "distance" int NOT NULL,
        "bulletDrop" decimal NOT NULL,
        CONSTRAINT "ballisticsData_pk" PRIMARY KEY ("dataPointId")
) WITH (
  OIDS=FALSE
);
