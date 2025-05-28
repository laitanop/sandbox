import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get current file´s directory

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// set up EJS as the view engine

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
