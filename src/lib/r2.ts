import { S3Client } from "@aws-sdk/client-s3";

export function r2Client() {
  const endpoint = process.env.S3_ENDPOINT;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  if (!endpoint || !accessKeyId || !secretAccessKey) throw new Error("R2 credentials are not configured");
  return new S3Client({ endpoint, region: process.env.S3_REGION || "auto", credentials: { accessKeyId, secretAccessKey } });
}

export function r2Bucket(visibility: "public" | "private" = "private") {
  const bucket = visibility === "public" ? process.env.R2_PUBLIC_BUCKET : process.env.S3_BUCKET;
  if (!bucket) throw new Error(`${visibility === "public" ? "R2_PUBLIC_BUCKET" : "S3_BUCKET"} is not configured`);
  return bucket;
}
