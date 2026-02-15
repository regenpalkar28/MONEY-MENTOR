import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quizRouter from "./routes/quizllm.js";
import authRouter from "./routes/auth.js";
import profileRouter from "./routes/profileRoutes.js";

// Load env variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/quiz', quizRouter); 
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
export default app;