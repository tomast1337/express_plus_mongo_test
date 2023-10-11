import express  from "express";
import { UserRouter } from "./user.router.mjs";

const router = express.Router();
router.use("/user", UserRouter);
router.get("/", (req, res) => res.json({ message: "Hello ESM with esm !!" }));

export { router };
