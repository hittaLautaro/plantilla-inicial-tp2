import express from "express";
import dotenv from "dotenv";
import Router from "./routes/route.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", new Router().startRoutes());

app.use((req, res) => {
  res.status(404).json({
    code: 404,
    message: "Not found.",
  });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
