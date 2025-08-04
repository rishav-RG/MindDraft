import express from "express";
import "dotenv/config"; // ✅ This auto-runs dotenv.config()
import cors from "cors";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import { connectToDatabase } from "./configs/db.js";
import rateLimit from "express-rate-limit";

const app = express();

await connectToDatabase(); // ✅ Make sure this is inside top-level await OR wrap in async IIFE

// Middlewares
app.use(cors());
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Routes
app.get("/", (req, res) => {
  res.send("App is working");
});
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
app.use("/api/comments", limiter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("✅ Server is listening on PORT: " + PORT);
});
