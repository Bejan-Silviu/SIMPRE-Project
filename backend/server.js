require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const nodeRouter = require('./routes/nodeRouter')
const path = require('path')

const app = express();


app.use(cors({
    origin: ["https://simpre-project-frontend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}));


app.use(express.json());


app.use('/user', userRouter);
app.use('/api/notes', nodeRouter);


const URI = process.env.DATABASE;
mongoose.connect(URI, err => {
    if (err) throw err;
    console.log('Connected to MongoDB');
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
   
    });
}


app.get("/", (req, res) => {
    res.json("Hello!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
