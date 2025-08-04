import { Router } from "express";
import { createComment } from "../controllers/commentController.js";
import { commentLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/", commentLimiter, createComment);

export default router;
