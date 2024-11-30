import express from "express";
import morgan from "morgan";
import cliente from "./routes/cliente.routes.js";
import platillo from "./routes/platillo.routes.js";
import categoria from "./routes/categoria.routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./database/database.js"; 

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

connectDB();

app.set("port", 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cliente);
app.use(platillo);
app.use(categoria);

export default app;
