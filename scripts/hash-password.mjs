import bcrypt from "bcryptjs";

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error("Usage: npm run hash-password -- 'a-password-with-at-least-12-characters' [--raw]");
  process.exit(1);
}
const hash = await bcrypt.hash(password, 12);
// Next.js expands `$NAME` references in .env files. Escape bcrypt's dollar
// separators so the value loaded at runtime remains the original hash.
console.log(process.argv.includes("--raw") ? hash : hash.replaceAll("$", "\\$"));
