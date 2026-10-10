import postgres from "postgres";
import net from "node:net";
import { requireDatabaseUrl } from "./load-project-env.mjs";

function checkTcp(hostname, port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: hostname, port, timeout: 5000 });
    socket.once("connect", () => { socket.destroy(); resolve("reachable"); });
    socket.once("timeout", () => { socket.destroy(); resolve("timed out"); });
    socket.once("error", (error) => resolve(error.code || "unreachable"));
  });
}

try {
  const sql = postgres(requireDatabaseUrl(), { max: 1, connect_timeout: 10, prepare: false, ssl: "require" });
  const rows = await sql`select current_database() as database_name, now() as checked_at`;
  console.log(`Neon connection successful: ${rows[0].database_name}`);
  await sql.end();
} catch (error) {
  console.error("Neon connection failed:", error instanceof Error ? error.message : error);
  if (error instanceof Error && error.cause instanceof Error) {
    console.error("Cause:", error.cause.message);
  }
  const url = new URL(requireDatabaseUrl());
  const tcpStatus = await checkTcp(url.hostname, Number(url.port || 5432));
  console.error(`Endpoint TCP check: ${tcpStatus}`);
  if (tcpStatus === "timed out") {
    console.error("The URL format is valid, but the Neon endpoint cannot be reached. Check the compute in Neon, copy a fresh pooled connection string, and retry from another network or without a VPN.");
  }
  process.exit(1);
}
