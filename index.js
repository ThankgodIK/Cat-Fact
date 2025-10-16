import express from "express";
import cors from "cors";
import user from "./data.js";
import getCatFact from "./catFact.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get("/me", async (req, res) => {
  try {
    const catFact = await getCatFact();
    res.json({
      status: "success",
      message: `Welcome back, ${user.name}!`,
      user,
      catFact: catFact.fact,
      timeStamp: new Date().toISOString(),
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Failed to fetch cat fact", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
