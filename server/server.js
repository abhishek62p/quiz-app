const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');
const { PORT, connectDB } = require('./config/config');

const app = express();

connectDB();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use('/api/v1', rootRouter);

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));