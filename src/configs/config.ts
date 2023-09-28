import { config } from "dotenv";

config();

export const configs = {
  DB_URI:
    process.env.DB_URI ||
    "mongodb+srv://NewNode:NewNode@newnode.5z3ciul.mongodb.net/",
  PORT: process.env.PORT || 5001,
};
