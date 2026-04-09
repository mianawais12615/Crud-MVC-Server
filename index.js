import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import productsRouter from "./routes/products.js";
import { connectDB } from "./utils/DB.js";

// Connect to Database
connectDB();

const app = express();

// CORS configuration for Railway deployment
app.use(cors({
  origin: '*', // Allow all origins, or specify your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!', status: 'OK' });
});

app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
