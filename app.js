import express from "express";
import morgan from "morgan";
import web from "./routes/web.js";
import { join } from "path";
import { config } from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
const app = express();

//Configure environment variables
config();

// serving static files
app.use(express.static(join(process.cwd(), "public")));

// set template engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

//Morgan
app.use(morgan("dev"));

//Database Connetion
const uri = process.env.MONGO_URI;
dbConnection(uri);

// load routes
app.use("/", web);

//listen server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
