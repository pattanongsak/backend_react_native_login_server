
require('./config/db');

const app = require('express')();
const port = process.env.PORT || 9001;

const UserRouter = require('./api/User');


const bodyParser = require('express').json;
app.use(bodyParser());

app.get('/home', (req, res) => {
    res.status(200).send('Hellow Wolrd')
})
app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})