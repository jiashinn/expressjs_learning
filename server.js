import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./router/posts.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT;

const app = express();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/posts", posts);

app.use(notFound);

//Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port} `));
