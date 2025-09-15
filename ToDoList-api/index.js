require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDb');
const taskRouter = require('./routes/task');

const app = express();
const PORT = process.env.PORT || 3000

connectDB();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

app.use('*', (req, res) => {
    res.status(404).send({
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});