import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import projectenRoute from './routes/_projecten.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

//Middleware
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://www.amarbaldewsing.nl");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.use('/api/v1/projects', projectenRoute);

//Standard Route
app.get('/', (req, res) => {
    res.send('app working');
})

//Start Server
app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on http://localhost:${PORT}/`);
})