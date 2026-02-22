import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import Auth_Routers from "./routes/auth_routes.js";
import User_Routers from "./routes/user_routes.js";
import Admin_Routers from "./routes/admin_routes.js";
import Investigator_Routers from "./routes/investigator_routes.js";
import Complaint_Routers from "./routes/complaint_routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://e-cyber-crime-portal.vercel.app",
    ],
    credentials: true,
  })
);

/* ================= DATABASE ================= */

connectDB();

/* ================= ROUTES ================= */

app.use("/", Auth_Routers);
app.use("/", User_Routers);
app.use("/", Admin_Routers);
app.use("/", Investigator_Routers);
app.use("/", Complaint_Routers);

app.use("/uploads", express.static("uploads"));

/* ================= HEALTH CHECK ================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started successfully on PORT ${PORT}`);
});