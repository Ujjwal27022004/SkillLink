import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8000"], // Corrected multiple origins
    credentials: true, // Allow credentials
  })
);

app.use(express.json({ limit: "16kb" })); // Parse JSON in body
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL
app.use(express.static("public")); // Use static public folder
app.use(cookieParser()); // Enable CRUD operation on browser cookies

// Passport middleware
app.use(passport.initialize());

// Importing routes
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import chatRouter from "./routes/chat.routes.js";
import messageRouter from "./routes/message.routes.js";
import requestRouter from "./routes/request.routes.js";
import reportRouter from "./routes/report.routes.js";
import ratingRouter from "./routes/rating.routes.js";

// Using routes
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/chat", chatRouter);
app.use("/message", messageRouter);
app.use("/request", requestRouter);
app.use("/report", reportRouter);
app.use("/rating", ratingRouter);

export { app };
