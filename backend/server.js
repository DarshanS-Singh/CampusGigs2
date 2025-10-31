// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes'); // <--- NEW

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

connectDB();

// 2. Simple Root Route (Health Check)
app.get('/', (req, res) => {
    res.send('CampusGigs API is running.');
});

// 3. Mount Routes <--- NEW
app.use('/api/auth', authRoutes);

// 4. Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
