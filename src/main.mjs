import express from "express";
import * as dotenv from "dotenv";
import { connectDb } from "./models/index.mjs";
import { router } from "./routes/index.mjs";
dotenv.config(); // Load env vars

const main = async () => {
    const port = process.env.PORT || 8080;
    if (!port) throw new Error("PORT is not defined");

    await connectDb()

    const app = express();

    app.use(express.json()); // for parsing application/json
    app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.disable("x-powered-by"); // Disable x-powered-by header

    app.use("/api", router);

    app.listen(8080, () => {
        console.log(`Server listening on port http://localhost:${port} 🚀🌌`); 
    });
}

main().catch((err) => {
    console.error(err);
    console.error("Failed to start server");
    process.exit(1);
});
