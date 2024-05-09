require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const nodeRouter = require('./routes/nodeRouter');

const app = express();

// Middleware
app.use(cors({
    origin: ["https://simpre-project-frontend.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/user', userRouter);
app.use('/api/notes', nodeRouter);

// MongoDB connection
const URI = process.env.DATABASE;
mongoose.connect(URI, err => {
    if (err) throw err;
    console.log('Connected to MongoDB');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
