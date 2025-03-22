const express = require('express');
const rootRouter = require('./routes/index');
const { PORT, connectDB } = require('./config/config');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/v1', rootRouter);

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));