const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const Quiz =require('./models/quiz')
const data=require('./data');


// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); 

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});


// quiz Api for getting data.
app.get("/api/quiz", async (req, res) => {
  try {
    const quiz = await Quiz.find().limit(6);
    res.json(quiz);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
