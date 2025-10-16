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
    res.setHeader("Content-Type", "application/json");
    res.json({
      status: "success",
      user,
      timestamp: new Date().toISOString(),
      catFact,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
