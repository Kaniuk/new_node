import fs from "node:fs/promises";

import path from "path";

const dbPath = path.join(process.cwd(), "db.json");
const reader = async (): Promise<any[]> => {
  const json = await fs.readFile(dbPath, { encoding: "utf-8" });
  // const users = JSON.parse(json);
  return JSON.parse(json);
};
const writer = async (users: any[]) => {
  await fs.writeFile(dbPath, JSON.stringify(users));
};

export { reader, writer };
