const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const auth = require('./middlewares/auth')
const userController = require('./controllers/userController');
const matchController = require('./controllers/matchDayController')

const cookieParser = require('cookie-parser');
const cookieSecret = 'MySecret';

start();

async function start() {
    await new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/pro-football', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.once('open', () => {
            console.log('DB connected');
            resolve();
        })
        db.on('error', (err) => {
            console.log(err);
            reject(err);
        })
    });
    const app = express();
    app.use(cookieParser(cookieSecret));

    app.use(cors({
        origin: 'http://localhost:4200',
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
        credentials: true
    }));
   
    app.use(auth())
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('REST Service Operational. Send requiest to /api');
    })

    app.use('/api/users', userController);
    app.use('/api/matches', matchController);

    app.listen(3000, () => console.log('Server listen on port 3000'));
}

