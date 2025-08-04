import rateLimit from "express-rate-limit";

export const commentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 comments per window per IP
  message: "Too many comments, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
