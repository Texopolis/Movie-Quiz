import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import routes from "./routes/routes"

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes);

app.listen(port, () => console.log(`Server running on port ${port}.`));
