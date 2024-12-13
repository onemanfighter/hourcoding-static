import app from "./app";
import dotEnv from "dotenv";
dotEnv.config();

app.listen(process.env.HOSTING_PORT || 3000);
